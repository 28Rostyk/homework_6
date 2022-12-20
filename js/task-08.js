const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const formElement = e.currentTarget.elements;
  const mail = formElement.email.value;
  const password = formElement.password.value;
  const formData = {
    mail,
    password,
  };

  if (mail !== "" && password !== "") {
    console.log(formData);
    form.reset();
    return;
  }
  alert("Заповніть всі поля");
  form.reset();
}
