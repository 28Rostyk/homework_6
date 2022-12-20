const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlurInput);
const inputLength = Number(input.getAttribute("data-length"));
console.log(inputLength);

function onBlurInput() {
  if (inputLength === input.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
