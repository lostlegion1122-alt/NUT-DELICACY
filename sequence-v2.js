/* Sharper scroll story: decode and feather once, paint once per browser frame. */
(() => {
  const section=document.getElementById('experience'),track=document.getElementById('sequence-track'),canvas=document.getElementById('sequence-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d',{alpha:false,desynchronized:true});if(!ctx)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const connection=navigator.connection,saveData=connection?.saveData||/(^|-)2g$/.test(connection?.effectiveType||'');
  const mobile=matchMedia('(max-width:850px)').matches||saveData,variant=mobile?'mobile':'desktop',count=261;
  const cache=new Map(),pending=new Set(),failed=new Set(),masks=new Map(),backbone=new Map(),controllers=new Map();
  const captions=[...section.querySelectorAll('.caption-step')],poster=section.querySelector('.sequence-poster');
  const bar=document.getElementById('hud-progress-bar'),counter=document.getElementById('hud-counter'),hint=document.getElementById('scroll-hint');
  let queue=[],active=0,frame=0,target=0,progress=0,raf=0,lastTime=0;
  let storyTop=0,storyDistance=1,completed=false,outside=false,dirty=true,drawn=-1;
  let renderW=0,renderH=0,offsetX=0,offsetY=0,previousChapter=-1,studioBackground;
  function makeMask(width,height){
    const key=`${width}x${height}`;if(masks.has(key))return masks.get(key);
    const mask=document.createElement('canvas');mask.width=width;mask.height=height;
    const c=mask.getContext('2d'),v=c.createLinearGradient(0,0,0,height);
    v.addColorStop(0,'transparent');v.addColorStop(.075,'#000');v.addColorStop(.91,'#000');v.addColorStop(1,'transparent');
    c.fillStyle=v;c.fillRect(0,0,width,height);c.globalCompositeOperation='destination-in';
    const h=c.createLinearGradient(0,0,width,0);h.addColorStop(0,'transparent');h.addColorStop(.06,'#000');h.addColorStop(.94,'#000');h.addColorStop(1,'transparent');
    c.fillStyle=h;c.fillRect(0,0,width,height);masks.set(key,mask);return mask;
  }
  async function prepare(image,sx=0,sy=0,width=image.naturalWidth||image.width,height=image.naturalHeight||image.height){
    const w=width,h=height;
    const surface=document.createElement('canvas');surface.width=w;surface.height=h;
    const c=surface.getContext('2d');c.drawImage(image,sx,sy,w,h,0,0,w,h);c.globalCompositeOperation='destination-in';c.drawImage(makeMask(w,h),0,0);
    let bitmap=surface;if(typeof createImageBitmap==='function'){try{bitmap=await createImageBitmap(surface);}catch{}}
    return{bitmap};
  }
  function geometry(){
    if(typeof _scrollLockCount!=='undefined'&&_scrollLockCount>0)return;
    const height=track.getBoundingClientRect().height,width=track.clientWidth,dpr=Math.min(devicePixelRatio||1,mobile?1.65:1.6);
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
    renderW=width<=850?canvas.width*1.38:Math.min(canvas.width,canvas.height*(1280/720))*.82;
    renderH=renderW/(1280/720);offsetX=(canvas.width-renderW)/2;offsetY=(canvas.height-renderH)/2;
    // Foreground nuts enter the frame corners. Never use those pixels to tint
    // the full viewport: it caused brown/green flashes during the pouring shot.
    studioBackground=ctx.createLinearGradient(0,0,0,canvas.height);
    studioBackground.addColorStop(0,'#c1c1c1');studioBackground.addColorStop(1,'#d1d1d1');
    storyTop=section.getBoundingClientRect().top+scrollY;storyDistance=Math.max(1,section.offsetHeight-height);
    dirty=true;drawn=-1;readScroll();
  }
  function draw(){
    if(!cache.size&&!backbone.size)return;let nearest=frame;
    if(!cache.has(nearest))for(const index of cache.keys())if(!cache.has(nearest)||Math.abs(index-frame)<Math.abs(nearest-frame))nearest=index;
    const low=Math.floor(frame/4)*4,high=Math.min(count-1,low+4);
    const useBackbone=backbone.has(low)&&backbone.has(high)&&(!cache.has(nearest)||Math.abs(nearest-frame)>1);
    const signature=useBackbone?`preview-${frame}`:nearest;
    if(signature===drawn&&!dirty)return;const asset=useBackbone?backbone.get(low):cache.get(nearest);if(!asset)return;
    ctx.fillStyle=studioBackground;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(asset.bitmap,offsetX,offsetY,renderW,renderH);
    if(useBackbone&&high!==low){ctx.globalAlpha=(frame-low)/(high-low);ctx.drawImage(backbone.get(high).bitmap,offsetX,offsetY,renderW,renderH);ctx.globalAlpha=1;}
    canvas.dataset.renderedFrame=String(useBackbone?frame:nearest);canvas.dataset.quality=useBackbone?'preview':'full';
    drawn=signature;dirty=false;poster.hidden=true;if((useBackbone?frame:nearest)===count-1&&target===1)finish();
  }
  function schedule(){if(!raf&&!document.hidden)raf=requestAnimationFrame(animate);}
  function pump(){
    while(active<3&&queue.length){
      const index=queue.shift();if(cache.has(index)||pending.has(index)||failed.has(index))continue;
      active++;pending.add(index);const controller=new AbortController();controllers.set(index,controller);
      (async()=>{
        let source;
        try{
          const response=await fetch(`assets/sequence/v2/${variant}/${String(index).padStart(3,'0')}.webp`,{signal:controller.signal,cache:'force-cache'});
          if(!response.ok)throw new Error('Frame unavailable');
          const blob=await response.blob();
          if(typeof createImageBitmap==='function')source=await createImageBitmap(blob);
          else {source=new Image();source.src=URL.createObjectURL(blob);await source.decode();URL.revokeObjectURL(source.src);}
          if(controller.signal.aborted)return;
          const asset=await prepare(source);cache.set(index,asset);
          while(cache.size>16){const candidates=[...cache.keys()].filter(key=>key!==0);const farthest=candidates.reduce((a,b)=>Math.abs(a-frame)>Math.abs(b-frame)?a:b);cache.get(farthest).bitmap.close?.();cache.delete(farthest);}
          if(!outside){dirty=true;schedule();}
        }catch(error){if(error.name!=='AbortError'&&!controller.signal.aborted)failed.add(index);}
        finally{source?.close?.();controllers.delete(index);pending.delete(index);active--;pump();}
      })();
    }
  }
  function request(index){
    const needed=[index],ahead=saveData||reduced?0:index===0&&!backbone.size?1:mobile?5:8;
    for(let i=1;i<=ahead;i++)needed.push(index+i);if(!reduced&&!saveData)needed.push(index-1,index-2);
    queue=needed.filter(i=>i>=0&&i<count&&!cache.has(i)&&!pending.has(i)&&!failed.has(i));pump();
    for(const [key,controller]of controllers)if(Math.abs(key-index)>12&&key!==0)controller.abort();
  }
  function loadBackbone(){
    if(reduced||saveData)return;
    const image=new Image();image.decoding='async';image.fetchPriority='high';
    image.onload=async()=>{
      try{
        await image.decode();const w=mobile?320:480,h=w*9/16;
        for(let tile=0;tile<66;tile++)backbone.set(tile*4,await prepare(image,(tile%8)*w,Math.floor(tile/8)*h,w,h));
        canvas.dataset.previewReady='true';
        image.removeAttribute('src');dirty=true;schedule();
      }catch{/* Keep the sharp-frame loader and poster available if the atlas fails. */}
    };
    image.src=`assets/sequence/v2/${variant}/backbone.webp`;
  }
  function finish(){
    if(completed||(typeof _scrollLockCount!=='undefined'&&_scrollLockCount>0))return;
    completed=true;let dismissed=false;try{dismissed=sessionStorage.getItem('njoy-diwali-seen')==='1';}catch{}
    if(!dismissed){try{sessionStorage.setItem('njoy-diwali-seen','1');}catch{}window.openDiwaliModal?.();}
  }
  function animate(time){
    raf=0;const dt=Math.min(150,time-(lastTime||time-16));lastTime=time;
    progress=target===1?1:progress+(target-progress)*(1-Math.exp(-dt/85));if(Math.abs(target-progress)<.0008)progress=target;
    const next=saveData||reduced?0:Math.round(progress*(count-1));if(next!==frame){frame=next;request(frame);}
    if(!outside)draw();bar.style.transform=`scaleX(${progress})`;counter.textContent=`${String(frame+1).padStart(3,'0')} / ${count}`;
    hint.style.opacity=target>.015?'0':'1';hint.style.pointerEvents=target>.015?'none':'auto';
    const chapter=target<.08?0:target<.34?1:target<.59?2:target<.84?3:4;
    if(chapter!==previousChapter){captions.forEach((caption,index)=>caption.style.opacity=index===chapter?'1':'0');previousChapter=chapter;}
    if(Math.abs(progress-target)>.0008&&!outside)schedule();
  }
  function readScroll(){
    if(typeof _scrollLockCount!=='undefined'&&_scrollLockCount>0)return;
    const position=scrollY-storyTop;outside=position< -innerHeight||position>section.offsetHeight;
    target=Math.max(0,Math.min(1,position/storyDistance));
    if(!outside)schedule();
  }
  section.querySelector('.sequence-skip').addEventListener('click',()=>{completed=true;});
  window.addEventListener('scroll',readScroll,{passive:true});window.addEventListener('njoy:scroll-unlock',geometry);
  let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(geometry,150);},{passive:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;}else{lastTime=0;readScroll();}});
  if(saveData)section.classList.add('sequence-data-saver');bar.style.width='100%';bar.style.transformOrigin='left';bar.style.transform='scaleX(0)';request(0);geometry();loadBackbone();
})();
