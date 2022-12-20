const item = document.querySelector("#categories");
console.log(`Number of categories: ${item.children.length}`);

const items = document.querySelectorAll("#categories .item");
items.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
