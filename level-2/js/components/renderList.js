import { saveToStorage } from "../utils/storage.js";
import { listKey } from "../settings.js";

const renderList = (array) => {
  const list = document.querySelector(".list");
  list.innerHTML = "";
  array.forEach((item) => {
    list.innerHTML += `<li>${item.title}<button data-id="${item.id}">Remove</button></li>`;
  });

  const removeButtons = document.querySelectorAll("li button");
  removeButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
  function handleClick(e) {
    const id = e.target.dataset.id;
    const updatedList = removeItem(id, array);
    console.log(list);
    saveToStorage(listKey, updatedList);
  }
};

export default renderList;

function removeItem(id, array) {
  const updatedList = array.filter(
    (item) => parseInt(item.id) !== parseInt(id)
  );

  return updatedList;
}
