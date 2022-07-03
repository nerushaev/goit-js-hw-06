const inputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text')

inputEl.addEventListener("change", changeFontSize);

function changeFontSize() {
  spanTextEl.style.fontSize = `${inputEl.value}px`;
};

console.log(spanTextEl);
console.log(inputEl);