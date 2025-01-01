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

  // Drag over event
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Drop event
  div.addEventListener('drop', (e) => {
    e.preventDefault();
    const targetElement = e.target;

    // Swap the background images
    if (draggedElement !== targetElement) {
      const draggedBg = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = targetElement.style.backgroundImage;
      targetElement.style.backgroundImage = draggedBg;
    }
  });
});
