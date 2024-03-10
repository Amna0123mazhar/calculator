const numBtns = document.querySelectorAll('.num-btn');
const decimalBtn = document.querySelector('.decimal');
const clearBtn = document.getElementById('clear');
const operatorBtns = document.querySelectorAll('.operator');
const resultBtn = document.getElementById('result-btn');
const result = document.getElementById('result');

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetScreen = false;

numBtns.forEach(button => {
  button.addEventListener('click', () => {
    if (shouldResetScreen) {
      result.value = '';
      shouldResetScreen = false;
    }
    result.value += button.value;
  });
});

decimalBtn.addEventListener('click', () => {
  if (!result.value.includes('.')) {
    result.value += '.';
  }
});

clearBtn.addEventListener('click', () => {
  result.value = '';
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
});

operatorBtns.forEach(button => {
  button.addEventListener('click', () => {
    if (currentOperator || !result.value) return;
    firstOperand = parseFloat(result.value);
    currentOperator = button.value;
    shouldResetScreen = true;
    secondOperand = parseFloat(result.value); // Set secondOperand here
  });
});

resultBtn.addEventListener('click', () => {
  if (!firstOperand || !secondOperand || !currentOperator) return;
  secondOperand = parseFloat(result.value);
  let output;
  switch (currentOperator) {
    case '+':
      output = firstOperand + secondOperand;
      break;
    case '-':
      output = firstOperand - secondOperand;
      break;
    case '*':
      output = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand === 0) {
        alert('Cannot divide by zero');
        return;
      }
      output = firstOperand / secondOperand;
      break;
  }
  
  result.value = output;
  firstOperand = output;
  secondOperand = null;
  currentOperator = null;
});