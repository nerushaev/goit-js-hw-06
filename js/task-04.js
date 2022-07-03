let counterValue = 0;

const incrementButtonEl = document.querySelector('[data-action="increment"]');
const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value')

incrementButtonEl.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
  console.log("Button was clicked!");
})

decrementButtonEl.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
  console.log("Button was clicked!");
})


console.log(incrementButtonEl);
console.log(decrementButtonEl);
