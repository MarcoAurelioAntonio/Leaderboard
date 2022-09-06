import './style.css';
import Method from './modules/methods.js';

/* Objects in const */
// Form inputs:
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addButton = document.querySelector('.addBtn');

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value !== '' && author.value !== '') {
    Method.addStorage(title, author);
    Method.addBook(title, author);
  }
});

window.addEventListener('load', () => {
  // load from localStorage
  let storagedBooks = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
  for (let i = 0; i < storagedBooks.length; i += 1) {
    // create book container
    const div1 = document.createElement('div');
    div1.classList.add('div1');

    // create p to title and author
    const p = document.createElement('p');
    p.classList.add('text-book');
    p.textContent = `${storagedBooks[i].title}:  ${storagedBooks[i].author}`;

    // add p to div1
    div1.appendChild(p);

    // Conteiner for all books
    const bookList = document.querySelector('.book-list');
    bookList.appendChild(div1); // Book and button added to a container!
  }
  storagedBooks = [];
});
