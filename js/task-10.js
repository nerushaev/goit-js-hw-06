const getCreateButton = document.querySelector('[data-create]');
const getDestroyButton = document.querySelector('[data-destroy]');
const getColorBox = document.querySelector('#boxes');
const getControlAmount = document.querySelector('input');


getCreateButton.addEventListener('click', onCreateBoxes);
getDestroyButton.addEventListener('click', onDectroyButton);
// getControlAmount.addEventListener('input', onInput);

// function onInput(e) {
//   let numberArray = [];
//   const yyy = e.currentTarget.value;
//   numberArray.push(yyy);
//   console.log(numberArray);
// }
function onCreateBoxes() {

  let numberArray = [];
  for (let i = 1; i <= getControlAmount.value; i += 1) {
    numberArray.push(i);
  };
  console.log(numberArray);
  const boxes = numberArray.map((number) => {
    const createBox  = document.createElement('div');
    const value = (20 + number * 10);
    createBox.style.width = `${value}px`;
    createBox.style.height = `${value}px`;
    createBox.style.backgroundColor = getRandomHexColor();
    return createBox;
    }); 
  getColorBox.append(...boxes);
};

function onDectroyButton() {
  getColorBox.innerHTML = '';
  getControlAmount.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };