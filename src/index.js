import './style.css';
import Method from './modules/methods.js';
import api from './modules/api.js';

/* Objects in const */
// Form inputs:
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addButton = document.querySelector('.addBtn');

function loadFromApi(topTen) {
  const bookList = document.querySelector('.book-list');
  bookList.innerHTML = '';
  for (let i = 0; i < topTen.length; i += 1) {
    // create book container
    const div1 = document.createElement('div');
    div1.classList.add('div1');

    // create p to title and author
    const p = document.createElement('p');
    p.classList.add('text-book');
    p.textContent = `${topTen[i].user}:  ${topTen[i].score}`;

    // add p to div1
    div1.appendChild(p);

    // Conteiner for all books
    bookList.appendChild(div1); // Book and button added to a container!
  }
}

const manageData = async () => {
  const data = await api.getScores();
  const x = [...data];
  x.sort((a, b) => b.score - a.score);
  const topTen = x.slice(0, 10);
  loadFromApi(topTen);
};
manageData();

document.querySelector('.refresh').addEventListener('click', () => {
  manageData();
});

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value !== '' && author.value !== '') {
    const user = title.value;
    const score = author.value;
    Method.addBook(title, author);
    api.createNewScore(user, score);
  }
});