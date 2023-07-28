let display = document.getElementById('display');
let calculationDisplay = document.getElementById('calculation');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
  calculationDisplay.textContent = '';
}

function deleteFromDisplay() {
  display.value = display.value.slice(0, -1);
}

function negate() {
  display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
}

function calculate() {
  try {
    let expression = display.value
      .replace(/x/g, '*')
      .replace(/÷/g, '/') 
      .replace(/\^/g, '**') 
      .replace(/(\d+)%(\d+)/g, '($1/100)*$2') 
      .replace(/%/g, '/100'); 

    let result = eval(expression);
    display.value = result;
    calculationDisplay.textContent = expression + '=' + result;
  } catch (error) {
    display.value = 'Error';
  }
}