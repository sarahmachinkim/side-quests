document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.window').forEach(windowEl => {
    const header = windowEl.querySelector('.window-header');
    const closeBtn = windowEl.querySelector('.close-btn');

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      offsetX = e.clientX - windowEl.offsetLeft;
      offsetY = e.clientY - windowEl.offsetTop;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      windowEl.style.left = ${e.clientX - offsetX}px;
      windowEl.style.top = ${e.clientY - offsetY}px;
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    header.addEventListener('mousedown', onMouseDown);

    closeBtn.addEventListener('click', () => {
      windowEl.style.display = 'none';
    });
  });
});
