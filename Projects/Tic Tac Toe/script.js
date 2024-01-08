const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  let newRow = document.createElement('section');
  newRow.className = 'new-section';

  let newTitle = document.createElement('div');
  newTitle.textContent = `${title.value}`;
  newRow.appendChild(newTitle);

  let newAuthor = document.createElement('div');
  newAuthor.textContent = author.value;
  newRow.appendChild(newAuthor);

  let newYear = document.createElement('div');
  newYear.textContent = year.value;
  newRow.appendChild(newYear);


  bookList.appendChild(newRow);
});
