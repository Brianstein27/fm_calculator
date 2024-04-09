const result = document.querySelector(".display");
//initialize an array to store the numbers
const numbers = ['', ''];
let index = 0;
//create an array to store the number that has been calculated
let mathematicalOperator = '';

// add functionality of number buttons
const numButton = document.querySelectorAll(".num");
for (let i = 0; i < numButton.length; i++) {
  numButton[i].addEventListener('click', function() {
    numbers[index] += numButton[i].innerText;
    result.innerText = numbers[index];
  })
}

//add functionality of backspace button
const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener('click', function() {
  if (numbers[index].length > 1) {
    numbers[index] = numbers[index].substring(0, numbers[index].length - 1);
    result.innerText = numbers[index];
  } else {
    numbers[index] = '';
    result.innerText = '0';
  }
})

// add functionality of clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = '';
    mathematicalOperator = '';
    index = 0;
    result.innerText = '0'
  }
})

// add functionality of operator buttons
const operatorButton = document.querySelectorAll('.operator');
for (let i = 0; i < operatorButton.length; i++) {
  operatorButton[i].addEventListener('click', function() {
    numbers[0] = parseInt(numbers[0]);
    if (numbers[1] != '') {
      numbers[1] = parseInt(numbers[1]);
    }
    result.innerText = operatorButton[i].innerText;
    index = 1;
    if (mathematicalOperator != '') {
      numbers[0] = calculate(numbers[0], numbers[1], mathematicalOperator);
      numbers[1] = '';
    }
  })
}

// add functionality of individual operator buttons
const divideButton = document.querySelector('.divide');
divideButton.addEventListener('click', function() {
  mathematicalOperator = 'divide';
})

const multiplyButton = document.querySelector('.multiply');
multiplyButton.addEventListener('click', function() {
  mathematicalOperator = 'multiply';
})

const minusButton = document.querySelector('.minus');
minusButton.addEventListener('click', function() {
  mathematicalOperator = 'minus';
})

const addButton = document.querySelector('.add');
addButton.addEventListener('click', function() {
  mathematicalOperator = 'add';
})

// add functionality of equals button
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', function() {
  if (numbers[1] != '') {
    numbers[1] = parseInt(numbers[1]);
    numbers[0] = calculate(numbers[0], numbers[1], mathematicalOperator);
    result.innerText = numbers[0];
    mathematicalOperator = '';
    numbers[1] = '';
  }
})

// create operator functions

function calculate(number1, number2, operator) {
  switch (operator) {
    case 'divide':
      return number1 / number2;
    case 'multiply':
      return number1 * number2;
    case 'minus':
      return number1 - number2;
    case 'add':
      return number1 + number2;
  }
}
