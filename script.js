
const colorInput = document.getElementById('colorInput');
const textInput = document.getElementById('textInput');
const bgBtn = document.getElementById('bgBtn');
const textBtn = document.getElementById('textBtn');
const contentBox = document.getElementById('content-box');

bgBtn.addEventListener('click', () => {
  const color = colorInput.value.trim();

  const testDiv = document.createElement('div');
  testDiv.style.backgroundColor = color;

  if (testDiv.style.backgroundColor === '') {
    alert('Invalid color name!');
  } else {
    contentBox.style.backgroundColor = color;
  }
});

textBtn.addEventListener('click', () => {
  const text = textInput.value.trim();

  if (text === '') {
    alert('Please enter some text!');
  } else {
    contentBox.textContent = text;
  }
});