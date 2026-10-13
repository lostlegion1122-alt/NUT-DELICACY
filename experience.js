(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero = document.querySelector('.festive-living-hero');
  if (hero) {
    const diya = hero.querySelector('.diya-toggle');
    const action = hero.querySelector('.ritual-action');
    const status = document.getElementById('diya-status');
    const sky = document.createElement('canvas');
    sky.className = 'festival-fireworks'; sky.setAttribute('aria-hidden','true'); hero.append(sky);
    let celebrationFrame = 0;
    function fireworks() {
      cancelAnimationFrame(celebrationFrame);
      if (reduced) return;
      const dpr = Math.min(devicePixelRatio || 1,1.4),w=hero.clientWidth,h=hero.clientHeight;
      sky.width=Math.round(w*dpr);sky.height=Math.round(h*dpr);
      const ctx=sky.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);
      const particles=[];
      [[.18,.22,0],[.73,.16,400],[.58,.48,850]].forEach(([x,y,delay])=>{
        for(let i=0;i<28;i++)particles.push({x:x*w,y:y*h,delay,angle:i*Math.PI*2/28,speed:42+Math.random()*58});
      });
      let started;
      const paint=time=>{
        if(document.hidden){ctx.clearRect(0,0,w,h);return;}
        started ??= time;const elapsed=time-started;ctx.clearRect(0,0,w,h);
        for(const p of particles){const age=(elapsed-p.delay)/1000;if(age<0||age>1.8)continue;
          const radius=p.speed*age,fall=22*age*age;
          ctx.globalAlpha=Math.max(0,1-age/1.8);ctx.strokeStyle=age<.6?'#a26720':'#b7802f';ctx.lineWidth=2.8;
          ctx.shadowColor='#efb64a';ctx.shadowBlur=4;
          ctx.beginPath();ctx.moveTo(p.x+Math.cos(p.angle)*Math.max(0,radius-9),p.y+Math.sin(p.angle)*Math.max(0,radius-9)+fall);
          ctx.lineTo(p.x+Math.cos(p.angle)*radius,p.y+Math.sin(p.angle)*radius+fall);ctx.stroke();
        }
        ctx.globalAlpha=1;if(elapsed<2800)celebrationFrame=requestAnimationFrame(paint);else ctx.clearRect(0,0,w,h);
      };celebrationFrame=requestAnimationFrame(paint);
    }
    function light() {
      hero.classList.add('is-lit'); diya.setAttribute('aria-pressed','true');
      action.textContent = 'Celebrate again';
      status.textContent = 'May your Diwali be full of light and joy.';
      document.body.classList.add('diwali-lights-on');fireworks();
    }
    diya.addEventListener('click',light); action.addEventListener('click',light);
    action.textContent='Light up Diwali';
    const introduction=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){fireworks();introduction.disconnect();}},{threshold:.25});introduction.observe(hero);
  }

  const explorer = document.querySelector('.flavour-explorer');
  if (explorer) {
    let selected = 'peanut-butter';
    const descriptions = {
      'peanut-butter':'Bold, roasted and ready for your everyday toast.',
      'cashew-butter':'Mellow, creamy and lovely stirred into warm oats.',
      'hazelnut-chocolate-butter':'Roasted hazelnuts meet a rich chocolate finish.',
      'pistachio-butter':'A distinctive nutty flavour for little moments of indulgence.'
    };
    const buttons = [...explorer.querySelectorAll('[data-flavour]')];
    const image = document.getElementById('flavour-hero-image');
    buttons.forEach((button,index) => button.addEventListener('click',() => {
      selected = button.dataset.flavour;
      const product = PRODUCTS.find(p=>p.id===selected);
      buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      image.classList.add('is-switching');
      image.src = new URL(`assets/catalog/${selected}-800.webp`, SITE_ASSET_BASE).href;
      image.alt = `${product.name} — NJOY jar`;
      image.onload = () => image.classList.remove('is-switching');
      document.getElementById('flavour-hero-name').textContent = product.name;
      document.getElementById('flavour-hero-description').textContent = descriptions[selected];
      explorer.querySelector('.explorer-count').textContent = `0${index+1} / 04`;
    }));
    document.getElementById('flavour-product-link').addEventListener('click',() => { location.hash = `product-${selected}`; });
  }

  const studio = document.querySelector('.gift-preview-studio');
  if (studio) {
    let size = 2;
    const previewJars = ['pistachio-butter','zafran-gold-butter','hazelnut-chocolate-butter','almond-butter'];
    const notes = {2:'Duo Box · A thoughtful little gesture.',3:'Trio Box · A little more to discover.',4:'Grand Box · Something for everyone.'};
    const scene=studio.querySelector('.gift-box-scene');let wrappingTimer;
    function wrap() {
      clearTimeout(wrappingTimer);scene.classList.remove('is-wrapping','is-wrapped');
      if(reduced){scene.classList.add('is-wrapped');return;}
      // Restart a single wrapping sequence when the visitor chooses a size.
      void scene.offsetWidth;scene.classList.add('is-wrapping');
      wrappingTimer=setTimeout(()=>{scene.classList.remove('is-wrapping');scene.classList.add('is-wrapped');document.getElementById('hero-box-note').textContent=`${notes[size]} Happy Diwali!`;},3400);
    }
    studio.querySelectorAll('[data-preview-size]').forEach(button=>button.addEventListener('click',()=>{
      size = Number(button.dataset.previewSize);
      studio.querySelectorAll('[data-preview-size]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      const jars = document.getElementById('hero-box-jars');
      jars.style.setProperty('--jar-count',size);
      jars.replaceChildren(...previewJars.slice(0,size).map(id=>{
        const img = document.createElement('img');
        img.src = `assets/catalog/${id}-480.webp`; img.width=480; img.height=480;
        img.alt = `${PRODUCTS.find(p=>p.id===id).name} in the gift preview`; return img;
      }));
      document.getElementById('hero-box-note').textContent = notes[size];
      wrap();
    }));
    document.getElementById('hero-start-builder').addEventListener('click',()=>selectBoxSize(size));
    wrap();
    // The preview sits below the copy on phones. Replay its entrance once
    // when it becomes visible, so the visitor can actually see the wrapping.
    if(studio.getBoundingClientRect().top>innerHeight*.65){
      const entrance=new IntersectionObserver(entries=>{if(entries.some(e=>e.intersectionRatio>=.4)){wrap();entrance.disconnect();}},{threshold:.4});entrance.observe(studio);
    }
  }

  const corporate = document.querySelector('.corporate-preview');
  if (corporate) {
    let packaging = 'Branded';
    const brand = document.getElementById('hero-brand-name');
    const mark = document.getElementById('corporate-brand-mark');
    const quantity = document.getElementById('hero-gift-quantity');
    const output = document.getElementById('hero-quantity-output');
    const examples=['Amazon','Rapido','Campa'];let sampleIndex=0,timer,visible=false,editing=false;
    function stop(){clearTimeout(timer);}
    function showExample(){
      stop();if(reduced||!visible||document.hidden||editing||packaging!=='Branded'||brand.value.trim())return;
      const text=examples[sampleIndex++%examples.length];let length=0;
      const type=()=>{mark.textContent=text.slice(0,++length);if(length<text.length)timer=setTimeout(type,85);else timer=setTimeout(showExample,2400);};type();
    }
    const sampleObserver=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)showExample();else stop();},{threshold:.2});sampleObserver.observe(corporate);
    document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else showExample();});
    corporate.querySelectorAll('[data-packaging]').forEach(button=>button.addEventListener('click',()=>{
      packaging = button.dataset.packaging; corporate.dataset.packaging = packaging;
      corporate.querySelectorAll('[data-packaging]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      corporate.querySelector('.corporate-brand-field').hidden = packaging!=='Branded';
      corporate.querySelector('.corporate-box-top').hidden = packaging!=='Branded';
      mark.textContent = packaging==='Branded' ? brand.value.trim()||'YOUR BRAND' : 'NJOY';
      if(packaging==='Branded')showExample();else stop();
    }));
    brand.addEventListener('focus',()=>{editing=true;stop();mark.textContent=brand.value.trim()||'YOUR BRAND';});
    brand.addEventListener('blur',()=>{editing=false;showExample();});
    brand.addEventListener('input',()=>{stop();mark.textContent=brand.value.trim()||'YOUR BRAND';});
    quantity.addEventListener('input',()=>{output.textContent=`${Number(quantity.value).toLocaleString('en-IN')} gift boxes`;});
    document.getElementById('hero-corporate-plan').addEventListener('click',()=>{
      const count=Number(quantity.value);
      const range=count<50?'25-50':count<100?'50-100':count<500?'100-500':count<1000?'500-1000':'1000+';
      document.getElementById('corp-qty').value=range;
      const notes=document.getElementById('corp-notes');
      const existing=notes.value.replace(/Preview selection:.*(?:\n|$)/g,'').trim();
      notes.value=`Preview selection: ${packaging} packaging, ${count} gifts${packaging==='Branded'&&brand.value.trim()?`, brand: ${brand.value.trim()}`:''}.\n${existing}`.trim();
      document.getElementById('corp-form').scrollIntoView({behavior:reduced?'instant':'smooth',block:'start'});
    });
  }
})();
