const button = document.querySelector(".button");
const input = document.querySelector(".input");

import { saveToStorage, getFromStorage } from "./utils/storage.js";
import { listKey } from "./settings.js";

const listItems = getFromStorage(listKey);
saveToStorage(listKey, listItems);

button.addEventListener("click", addItem);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    addItem();
  }
});

function addItem() {
  const inputValue = input.value.trim();

  if (inputValue.length > 0) {
    const newItem = {
      title: inputValue,
      id: Date.now(),
    };
    listItems.push(newItem);
    saveToStorage(listKey, listItems);

    input.value = "";
    input.focus();
  }
}
