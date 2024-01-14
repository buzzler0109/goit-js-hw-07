const myForm = document.querySelector(".login-form");
const submit = [];

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const userEmail = form.elements.email.value.trim();
  const userPassword = form.elements.password.value.trim();
  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  }

  const updatedSubmit = {
    email: userEmail,
    password: userPassword,
  };
  submit.push(updatedSubmit);
  console.log(submit);
  form.reset();
});
