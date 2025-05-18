let currentDisplay = 'block';

function setDisplay(displayType) {
  currentDisplay = displayType;

  const boxes = document.querySelectorAll('.box');
  const boxesContainer = document.getElementById('boxes');
  const widthInput = document.getElementById('widthInput');
  const heightInput = document.getElementById('heightInput');

  // Clear previous css classes to avoid conflicts
  boxesContainer.classList.remove('block-layout', 'inline-layout');

  boxes.forEach(box => {
    box.style.display = displayType;

    if (displayType === 'inline') {
      box.style.width = 'auto';
      box.style.height = 'auto';
      box.style.lineHeight = 'normal';
    }
  });

  let desc = '';
  if (displayType === 'block') {
    boxesContainer.classList.add('block-layout');
    desc = 'Block elements take the full width available and start on a new line.';
    widthInput.disabled = false;
    heightInput.disabled = false;
  } else if (displayType === 'inline') {
    boxesContainer.classList.add('inline-layout');
    desc = 'Inline elements do not start on a new line and ignore width and height settings.';
    widthInput.disabled = true;
    heightInput.disabled = true;
  } else if (displayType === 'inline-block') {
    boxesContainer.classList.add('inline-layout');
    desc = 'Inline-block elements flow inline like text but respect width and height.';
    widthInput.disabled = false;
    heightInput.disabled = false;
  }

  document.getElementById('description').textContent = desc;
  document.getElementById('currentDisplay').textContent = displayType;

  updateBoxSize();
}

function updateBoxSize() {
  if (currentDisplay === 'inline') return;

  const width = document.getElementById('widthInput').value + 'px';
  const height = document.getElementById('heightInput').value + 'px';

  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.width = width;
    box.style.height = height;
    box.style.lineHeight = height;
  });
}

// Attach event listeners after DOM is loaded, This ensures all HTML elements are fully loaded before JavaScript tries to access or attach events to them.

//This attaches click listeners to each button,When a button is clicked, it calls setDisplay() with the chosen mode.

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('blockBtn').addEventListener('click', () => setDisplay('block'));
  document.getElementById('inlineBtn').addEventListener('click', () => setDisplay('inline'));
  document.getElementById('inlineBlockBtn').addEventListener('click', () => setDisplay('inline-block'));

  setDisplay('block');
});
