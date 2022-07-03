const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createItems = (items) => {
  return items.map((item) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = item;
    itemEl.classList.add("item");


    return itemEl;
  });
}
const list = document.querySelector("#ingredients");

list.append(...createItems(ingredients))

console.log(createItems(ingredients));




// const createList = (items) => {
//   return items.reduce((acc, item) => acc + `${item}`, "");
// }




// list.insertAdjacentHTML("beforebegin", createList(ingredients));

