
// Remove the `not-loaded` class shortly after the page finishes loading
window.addEventListener('load', () => {
  // Keep a small delay so the intro animation can be visible
  setTimeout(() => {
    document.body.classList.remove('not-loaded');
  }, 1000);
  // After the header appears, trigger a gentle flower highlight
  setTimeout(() => {
    const flowers = document.querySelector('.flowers');
    if (!flowers) return;
    // add a temporary high-level class for area-wide pulse
    flowers.classList.add('flower-highlight');
    // add per-flower pulse class so petals/centers animate
    const all = document.querySelectorAll('.flower');
    all.forEach((el, i) => {
      setTimeout(() => el.classList.add('flower-pulse'), i * 120);
      // remove the class after animation ends
      setTimeout(() => el.classList.remove('flower-pulse'), 1500 + i * 120);
    });
    // remove container highlight after animation
    setTimeout(() => flowers.classList.remove('flower-highlight'), 1400);
  }, 1200);
  // Also toggle highlight when header is clicked
  const header = document.querySelector('.site-header');
  if (header) {
    header.addEventListener('click', () => {
      const flowers = document.querySelector('.flowers');
      if (!flowers) return;
      // small text effect on the header
      header.classList.add('text-effect');
      setTimeout(() => header.classList.remove('text-effect'), 950);

      flowers.classList.add('flower-highlight');
      const all = document.querySelectorAll('.flower');
      all.forEach((el, i) => {
        setTimeout(() => el.classList.add('flower-pulse'), i * 80);
        setTimeout(() => el.classList.remove('flower-pulse'), 900 + i * 80);
      });
      setTimeout(() => flowers.classList.remove('flower-highlight'), 900);
    });

    // trigger a text effect on load too (sync with header reveal)
    setTimeout(() => {
      header.classList.add('text-effect');
      setTimeout(() => header.classList.remove('text-effect'), 950);
    }, 900);
  }
});
