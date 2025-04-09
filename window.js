document.addEventListener('DOMContentLoaded', () => {
  let highestZ = 1000;

  document.querySelectorAll('.window').forEach(windowEl => {
    const header = windowEl.querySelector('.window-header');
    const closeBtn = windowEl.querySelector('.close-btn');

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const bringToFront = () => {
      highestZ++;
      windowEl.style.zIndex = highestZ;
    };

    const onMouseDown = (e) => {
      isDragging = true;
      offsetX = e.clientX - windowEl.offsetLeft;
      offsetY = e.clientY - windowEl.offsetTop;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      bringToFront();
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      windowEl.style.left = `${Math.max(0, e.clientX - offsetX)}px`;
      windowEl.style.top = `${Math.max(0, e.clientY - offsetY)}px`;
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    // Touch support
    const onTouchStart = (e) => {
      isDragging = true;
      offsetX = e.touches[0].clientX - windowEl.offsetLeft;
      offsetY = e.touches[0].clientY - windowEl.offsetTop;
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
      bringToFront();
    };

    const onTouchMove = (e) => {
      if (!isDragging) return;
      windowEl.style.left = `${Math.max(0, e.touches[0].clientX - offsetX)}px`;
      windowEl.style.top = `${Math.max(0, e.touches[0].clientY - offsetY)}px`;
    };

    const onTouchEnd = () => {
      isDragging = false;
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };

    header.addEventListener('mousedown', onMouseDown);
    header.addEventListener('touchstart', onTouchStart);

    windowEl.addEventListener('mousedown', bringToFront);

    closeBtn.addEventListener('click', () => {
      windowEl.style.display = 'none';
    });
  });
});
