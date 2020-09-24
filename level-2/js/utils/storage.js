import renderList from "../components/renderList.js";

export const getFromStorage = (key) => {
  const value = localStorage.getItem(key);
  if (!value) {
    return [];
  }
  return JSON.parse(value);
};

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  renderList(value);
};
