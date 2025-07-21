const display = document.getElementById('display');
function append(value) {
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearAll() {
  display.textContent = '0';
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (e) {
    display.textContent = 'Error';
  }
}

document.addEventListener('keydown', function (e) {
  const key = e.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '%', '.'].includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    display.textContent = display.textContent.slice(0, -1) || '0';
  } else if (key.toLowerCase() === 'c') {
    clearAll();
  }
});
