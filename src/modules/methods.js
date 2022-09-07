import Book from './constructor.js';

export default class Method {
  static addBook(title, author) {
    const book = new Book(title.value, author.value);

    // create book container
    const div1 = document.createElement('div');
    div1.classList.add('div1');

    // create p to title and author
    const p = document.createElement('p');
    p.classList.add('text-book');
    p.textContent = `${book.title}:  ${book.author}`;

    // add p to div2
    div1.appendChild(p);
    // add div1 to list for all books

    // Conteiner for all books
    const bookList = document.querySelector('.book-list');
    bookList.appendChild(div1); // Book and button added!

    // clear inputs
    title.value = '';
    author.value = '';
  }
}
