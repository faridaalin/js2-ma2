import { saveToStorage } from "../utils/storage.js";
import { listKey } from "../settings.js";

function deleteList() {
  const deleteBtn = document.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteButton);
  console.log("clicked delete button");

  function deleteButton() {
    localStorage.removeItem(listKey);

    saveToStorage(listKey, []);
  }
}

export default deleteList;
