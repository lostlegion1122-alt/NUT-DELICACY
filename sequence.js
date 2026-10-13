/* Native scroll story: no scroll interception, bounded image requests and memory. */
(() => {
  const section = document.getElementById('experience');
  const track = document.getElementById('sequence-track');
  const canvas = document.getElementById('sequence-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha:false });
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const connection = navigator.connection;
  const saveData = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '');
  const mobile = matchMedia('(max-width: 850px)').matches || saveData;
  const variant = mobile ? 'mobile' : 'desktop';
  const count = 131;
  const cache = new Map();
  const pending = new Set();
  const failed = new Set();
  let queue = [], active = 0, frame = 0, target = 0, progress = 0, raf = 0, lastTime = 0;
  let storyTop = 0, storyDistance = 1, completed = false, outside = false;
  const captions = [...document.querySelectorAll('.caption-step')];
  const poster = document.querySelector('.sequence-poster');
  const bar = document.getElementById('hud-progress-bar');
  const counter = document.getElementById('hud-counter');
  const edgeSample = document.createElement('canvas');
  edgeSample.width = 2; edgeSample.height = 2;
  const edgeCtx = edgeSample.getContext('2d', { willReadFrequently:true });
  const surface = document.createElement('canvas');
  const surfaceCtx = surface.getContext('2d');
  const hint = document.getElementById('scroll-hint');
  const skip = document.querySelector('.sequence-skip');
  document.querySelectorAll('#site-header,.mobile-bottom-nav,.whatsapp-concierge-wrap').forEach(el => el.classList.add('cinematic-visible'));

  function geometry() {
    if (typeof _scrollLockCount !== 'undefined' && _scrollLockCount > 0) return;
    // Stable viewport units keep browser address-bar changes from compressing the story.
    const height = track.getBoundingClientRect().height;
    const width = track.clientWidth;
    const dpr = Math.min(devicePixelRatio || 1, mobile ? 1.5 : 2);
    canvas.width = Math.round(width*dpr); canvas.height = Math.round(height*dpr);
    storyTop = section.getBoundingClientRect().top + scrollY;
    storyDistance = Math.max(1, section.offsetHeight-height);
    draw(frame);
    readScroll();
  }

  function render(image) {
    if (!image?.naturalWidth) return;
    const w = canvas.width, h = canvas.height;
    // Fill the viewport using the actual frame's boundary pixels. This removes the
    // grey rectangle without changing the jar or introducing a second blurred jar.
    const portrait = track.clientWidth <= 850;
    const scale = portrait ? w*1.6/image.naturalWidth : Math.min(w/image.naturalWidth, h/image.naturalHeight)*.82;
    const iw = image.naturalWidth*scale, ih = image.naturalHeight*scale;
    const x = (w-iw)/2, y = (h-ih)/2;
    edgeCtx.drawImage(image,0,0,1,1,0,0,1,1);
    edgeCtx.drawImage(image,image.naturalWidth-1,0,1,1,1,0,1,1);
    edgeCtx.drawImage(image,0,image.naturalHeight-1,1,1,0,1,1,1);
    edgeCtx.drawImage(image,image.naturalWidth-1,image.naturalHeight-1,1,1,1,1,1,1);
    const pixels = edgeCtx.getImageData(0,0,2,2).data;
    const color = row => `rgb(${[0,1,2].map(c => Math.round((pixels[row*8+c]+pixels[row*8+4+c])/2)).join(',')})`;
    const background = ctx.createLinearGradient(0,Math.max(0,y),0,Math.min(h,y+ih));
    background.addColorStop(0,color(0)); background.addColorStop(1,color(1));
    ctx.fillStyle=background; ctx.fillRect(0,0,w,h);
    // Feather the actual frame into its sampled studio background. No stretched
    // shadow pixels, hard image rectangle, or fixed grey colour across scenes.
    surface.width=image.naturalWidth; surface.height=image.naturalHeight;
    surfaceCtx.globalCompositeOperation='source-over'; surfaceCtx.drawImage(image,0,0);
    surfaceCtx.globalCompositeOperation='destination-in';
    const vertical=surfaceCtx.createLinearGradient(0,0,0,surface.height);
    vertical.addColorStop(0,'transparent'); vertical.addColorStop(.08,'#000');
    vertical.addColorStop(.90,'#000'); vertical.addColorStop(1,'transparent');
    surfaceCtx.fillStyle=vertical; surfaceCtx.fillRect(0,0,surface.width,surface.height);
    const horizontal=surfaceCtx.createLinearGradient(0,0,surface.width,0);
    horizontal.addColorStop(0,'transparent'); horizontal.addColorStop(.07,'#000');
    horizontal.addColorStop(.93,'#000'); horizontal.addColorStop(1,'transparent');
    surfaceCtx.fillStyle=horizontal; surfaceCtx.fillRect(0,0,surface.width,surface.height);
    ctx.drawImage(surface,x,y,iw,ih);
    poster.hidden = true;
  }

  function draw(index) {
    let image = cache.get(index);
    if (!image && cache.size) {
      const closest = [...cache.keys()].reduce((a,b) => Math.abs(a-index)<Math.abs(b-index)?a:b);
      image = cache.get(closest);
    }
    if (image) render(image);
  }

  function pump() {
    while (active<3 && queue.length) {
      const index = queue.shift();
      if (cache.has(index) || pending.has(index) || failed.has(index)) continue;
      active++; pending.add(index);
      const image = new Image(); image.decoding = 'async';
      image.onload = () => {
        cache.set(index,image); pending.delete(index); active--;
        // Evict decoded images farthest from the current position, retaining the poster.
        while (cache.size>32) {
          const candidates = [...cache.keys()].filter(key => key!==0);
          const farthest = candidates.reduce((a,b) => Math.abs(a-frame)>Math.abs(b-frame)?a:b);
          cache.delete(farthest);
        }
        if (!outside) draw(frame);
        if (index === count-1 && target === 1) finish();
        pump();
      };
      image.onerror = () => { pending.delete(index); failed.add(index); active--; pump(); };
      image.src = `assets/sequence/${variant}/${String(index).padStart(3,'0')}.webp`;
    }
  }

  function request(index) {
    const radius = saveData || reduced ? 0 : 3;
    const needed = [index];
    for (let i=1;i<=radius;i++) needed.push(index+i,index-i);
    // Replace stale queued work after a fast swipe rather than fetching skipped frames.
    queue = needed.filter(i => i>=0 && i<count && !cache.has(i) && !pending.has(i) && !failed.has(i));
    pump();
  }

  function finish() {
    if (completed) return;
    completed = true;
    let dismissed = false;
    try { dismissed = sessionStorage.getItem('njoy-diwali-seen')==='1'; } catch {}
    if (!dismissed) {
      try { sessionStorage.setItem('njoy-diwali-seen','1'); } catch {}
      window.openDiwaliModal?.();
    }
  }

  function animate(time) {
    raf = 0;
    const dt = Math.min(250, time-(lastTime || time-16)); lastTime = time;
    progress = target === 1 ? 1 : progress+(target-progress)*(1-Math.exp(-dt/160));
    if (Math.abs(target-progress)<.001) progress=target;
    const next = reduced || saveData ? 0 : Math.round(progress*(count-1));
    if (next!==frame) { frame=next; request(frame); draw(frame); }
    bar.style.width = `${progress*100}%`;
    counter.textContent = `${String(frame+1).padStart(3,'0')} / ${count}`;
    hint.style.opacity = target>.015?'0':'1';
    hint.style.pointerEvents = target>.015?'none':'auto';
    const chapter = target<.08 ? 0 : target<.34 ? 1 : target<.59 ? 2 : target<.84 ? 3 : 4;
    captions.forEach((caption,index) => caption.style.opacity = index===chapter?'1':'0');
    if (target===1 && cache.has(count-1)) finish();
    if (Math.abs(progress-target)>.001 && !document.hidden) raf=requestAnimationFrame(animate);
  }

  function readScroll() {
    if (typeof _scrollLockCount !== 'undefined' && _scrollLockCount > 0) return;
    const position = scrollY-storyTop;
    outside = position < -innerHeight || position > section.offsetHeight;
    target = Math.max(0,Math.min(1,position/storyDistance));
    if (outside && target!==1) return;
    if (!raf) raf=requestAnimationFrame(animate);
  }
  skip.addEventListener('click', () => { completed=true; });
  window.addEventListener('scroll',readScroll,{passive:true});
  window.addEventListener('njoy:scroll-unlock', geometry);
  let resizeTimer;
  window.addEventListener('resize',() => { clearTimeout(resizeTimer); resizeTimer=setTimeout(geometry,150); },{passive:true});
  document.addEventListener('visibilitychange',() => {
    if (document.hidden) { cancelAnimationFrame(raf); raf=0; }
    else { lastTime=0; readScroll(); }
  });
  if (saveData) section.classList.add('sequence-data-saver');
  request(0); geometry();
})();
