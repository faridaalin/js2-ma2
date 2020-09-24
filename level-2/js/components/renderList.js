import { saveToStorage } from "../utils/storage.js";
import { listKey } from "../settings.js";
import removeItem from "../components/removeItem.js";

const renderList = (array) => {
  const list = document.querySelector(".list");
  list.innerHTML = "";

  if (array.length === 0) {
    list.innerHTML = `<li class="empty">You have no items in this list</li>`;
  }
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
    saveToStorage(listKey, updatedList);
  }
};

export default renderList;
