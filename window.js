document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.window').forEach(windowEl => {
    const header = windowEl.querySelector('.window-header');
    const closeBtn = windowEl.querySelector('.close-btn');

    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - windowEl.offsetLeft;
      offsetY = e.clientY - windowEl.offsetTop;
    });

    document.addEventListener('mouseup', () => isDragging = false);

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        windowEl.style.left = (e.clientX - offsetX) + 'px';
        windowEl.style.top = (e.clientY - offsetY) + 'px';
      }
    });

    closeBtn.addEventListener('click', () => {
      windowEl.style.display = 'none';
    });
  });
});
