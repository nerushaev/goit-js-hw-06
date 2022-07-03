const formEl = document.querySelector('.login-form');

const user = {};

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка заповніть поля вводу...");
  }
  user.email = email.value;
  user.password = password.value;
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
});

console.log(user);


