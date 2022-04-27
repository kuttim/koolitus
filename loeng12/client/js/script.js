const inputField = document.getElementById('input');

let isOperatorLastClicked = false;
let numbers = [];

const clickedNumber = (number) => {
  if (inputField.innerHTML === '0' || isOperatorLastClicked) {
    inputField.innerHTML = number;
  } else {
    inputField.innerHTML += number;
  }
  isOperatorLastClicked = false;
};

const clickedOperator = (operator) => {
  isOperatorLastClicked = true;
  if (operator === '+') {
    numbers.push(inputField.innerHTML);
  } else if (operator === '-') {
  }
  console.log(numbers);
};

const clickedEquals = async () => {
  numbers.push(inputField.innerHTML);
  console.log('equals!!', numbers);
  const response = await fetch(
    'https://88ec-85-196-192-119.eu.ngrok.io/api/add',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(numbers),
    }
  );
  const answer = await response.json();
  console.log('vastus:', answer);
  input.innerHTML = [answer.answer];
};

const clearInput = () => {
  inputField.innerHTML = '0';
  numbers.splice(0, numbers.length);
  console.log(numbers);
};
