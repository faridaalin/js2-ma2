const button = document.querySelector(".button");
const input = document.querySelector(".input");

import { saveToStorage, getFromStorage } from "./utils/storage.js";
import { listKey } from "./settings.js";
import deleteList from "./components/deleteList.js";

const listItems = getFromStorage(listKey);
saveToStorage(listKey, listItems);
deleteList();

button.addEventListener("click", addItem);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    addItem();
  }
});

function addItem() {
  const inputValue = input.value.trim();

  if (inputValue.length >= 2) {
    const latestList = getFromStorage(listKey);

    const newItem = {
      title: inputValue,
      id: Date.now(),
    };
    latestList.push(newItem);
    saveToStorage(listKey, latestList);

    input.value = "";
    input.focus();
  }
}
