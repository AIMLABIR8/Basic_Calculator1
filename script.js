const display = document.getElementById('display');
let currentInput = '';

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', () => handleInput(button.dataset.key));
});

function handleInput(key) {
  if (key === 'C') {
    currentInput = '';
  } else if (key === '←') {
    currentInput = currentInput.slice(0, -1);
  } else if (key === '=') {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
  } else {
    currentInput += key;
  }
  display.value = currentInput;
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/.=';
  if (allowedKeys.includes(e.key)) {
    handleInput(e.key);
  } else if (e.key === 'Enter') {
    handleInput('=');
  } else if (e.key === 'Backspace') {
    handleInput('←');
  } else if (e.key === 'Escape') {
    handleInput('C');
  }
});
