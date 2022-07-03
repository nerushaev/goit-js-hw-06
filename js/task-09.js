function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const buttonColorEl = document.querySelector(".change-color");
const spanTextEl = document.querySelector(".color")

buttonColorEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanTextEl.textContent = bodyEl.style.backgroundColor;
});


console.log();
// console.log(bodyEl);