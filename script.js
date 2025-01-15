let draggedElement = null;

document.querySelectorAll('.picture').forEach((div) => {
  // Drag start event
  div.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
      e.target.style.opacity = '0.5';
    }, 0);
  });

  // Drag end event
  div.addEventListener('dragend', (e) => {
    e.target.style.opacity = '1';
  });

  // Allow dropping on a picture
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Drop event to swap images
  div.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement !== e.target) {
      const draggedBg = draggedElement.style.backgroundImage;
      const targetBg = e.target.style.backgroundImage;

      draggedElement.style.backgroundImage = targetBg;
      e.target.style.backgroundImage = draggedBg;
    }
  });
});
