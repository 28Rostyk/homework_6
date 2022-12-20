const input = document.querySelector("#font-size-control");
const spanUi = document.querySelector("#text");

input.addEventListener("input", onInput);

function onInput() {
  console.log(input.value);
  spanUi.style.fontSize = input.value + "px";
}
