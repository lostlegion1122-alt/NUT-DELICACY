/* A single, accessible home campaign dialog; optional low-cost celebration. */
(() => {
  const backdrop = document.getElementById('diwali-modal-backdrop');
  let returnFocus;
  let focusTimer;
  const focusDialog = () => {
    if (backdrop?.classList.contains('active')) backdrop.querySelector('button').focus({ preventScroll:true });
  };
  window.openDiwaliModal = () => {
    if (!backdrop || backdrop.classList.contains('active')) return;
    returnFocus = document.activeElement;
    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
    _lockScroll();
    backdrop.getBoundingClientRect();
    focusDialog();
    requestAnimationFrame(focusDialog);
    // Keep focus after the backdrop's fade has completed as well.
    clearTimeout(focusTimer);
    focusTimer = setTimeout(focusDialog, 300);
  };
  window.closeDiwaliModal = event => {
    if (event && event.target !== backdrop && !event.target.closest('.diwali-modal-close,.diwali-modal-btn')) return;
    if (!backdrop?.classList.contains('active')) return;
    clearTimeout(focusTimer);
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    _unlockScroll();
    returnFocus?.focus({ preventScroll:true });
  };
  if (backdrop) {
    backdrop.setAttribute('aria-hidden', 'true');
    const corporate = document.createElement('a');
    corporate.href = 'corporate-gifting.html';
    corporate.className = 'diwali-modal-btn';
    corporate.textContent = 'Corporate Gifting →';
    corporate.onclick = () => window.closeDiwaliModal();
    backdrop.querySelector('.diwali-modal-actions').append(corporate);
    document.addEventListener('keydown', event => {
      if (!backdrop.classList.contains('active')) return;
      if (event.key === 'Escape') window.closeDiwaliModal();
      if (event.key !== 'Tab') return;
      const links = [...backdrop.querySelectorAll('button,a[href]')];
      if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); links.at(-1).focus(); }
      else if (!event.shiftKey && document.activeElement === links.at(-1)) { event.preventDefault(); links[0].focus(); }
    });
  }
  window.celebrateDiwali = button => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || button.disabled) return;
    button.disabled = true;
    const box = button.getBoundingClientRect();
    for (let i=0; i<18; i++) {
      const spark = document.createElement('span');
      spark.className = 'diwali-sparkle'; spark.textContent = i%2 ? '✦' : '·'; spark.setAttribute('aria-hidden','true');
      spark.style.left = `${box.left+box.width/2}px`; spark.style.top = `${box.top}px`;
      spark.style.setProperty('--spark-x', `${Math.cos(i*Math.PI/9)* (55+Math.random()*95)}px`);
      spark.style.setProperty('--spark-y', `${-30-Math.random()*200}px`);
      document.body.append(spark); spark.addEventListener('animationend', () => spark.remove(), { once:true });
    }
    setTimeout(() => { button.disabled = false; },1100);
  };
})();
