const userInputEl = document.querySelector('#name-input');
const userOutputEl = document.querySelector('#name-output');

userInputEl.addEventListener('input', event => {
  if (userInputEl.textContent.length <= 0) {
    userOutputEl.textContent = "Anonymous!";
  } 
  userOutputEl.textContent = event.currentTarget.value;
});
