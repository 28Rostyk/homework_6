const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(e) {
  //   console.log(e.currentTarget.value);
  output.textContent =
    e.currentTarget.value.trim() !== "" ? e.currentTarget.value : "Anonymous";
}
