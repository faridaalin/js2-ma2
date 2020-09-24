import books from "../data/data.js";
const list = document.querySelector(".list");

let myBooks = books;
renderBooks(myBooks);

function renderBooks(books) {
  if (books.length > 0) {
    list.innerHTML = "";
    books.forEach((book) => {
      list.innerHTML += `<li><span>${book.title}</span><button class"remove-btn" data-id="${book.isbn}">Remove</button></li>`;
    });
  } else {
    list.innerHTML = `<li class="empty">Your book list is empty</li>`;
  }

  const removeButtons = document.querySelectorAll("li button");
  removeButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}

function handleClick(e) {
  const id = e.target.dataset.id;
  const updateBooksList = deleteBook(myBooks, id);
  myBooks = updateBooksList;

  renderBooks(myBooks);
}

function deleteBook(books, id) {
  const filteredBooks = books.filter(
    (item) => parseInt(id) !== parseInt(item.isbn)
  );

  return filteredBooks;
}
