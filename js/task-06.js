const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);

function onBlur(e) {
  const inputValueLength = e.currentTarget.value.length;
  const dataLength = Number(input.getAttribute("data-length"));

  if (inputValueLength === dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
