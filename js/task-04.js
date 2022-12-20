const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueUI = document.querySelector("#value");

let total = 0;

decrementBtn.addEventListener("click", onClickDecrement);
incrementBtn.addEventListener("click", onClickIncrement);

function onClickDecrement() {
  total -= 1;
  valueUI.textContent = total;
}

function onClickIncrement() {
  total += 1;
  valueUI.textContent = total;
}
