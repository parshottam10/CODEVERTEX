const display = document.getElementById('display');

function append(value) {
  const operators = ['+', '-', '*', '/', '%'];

 
  if (value === '.' && hasDecimalInCurrentNumber()) return;


  if (operators.includes(value) && operators.includes(display.value.slice(-1))) return;

  display.value += value;
}


function hasDecimalInCurrentNumber() {
  const currentSegment = display.value.split(/[\+\-\*\/%]/).pop();
  return currentSegment.includes('.');
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function toggleSign() {
  if (display.value) {
    display.value = display.value.startsWith('-')
      ? display.value.slice(1)
      : '-' + display.value;
  }
}
