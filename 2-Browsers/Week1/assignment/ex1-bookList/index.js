function createBookList(books) {
  const ul = document.createElement('ul');

  books.forEach(book => {
    const li = document.createElement('li');

    // Create a paragraph with the title and author
    const p = document.createElement('p');
    p.textContent = `${book.title} by ${book.author}`;
    li.appendChild(p);

    // Create an image with the book cover using ISBN
    const img = document.createElement('img');
    img.src = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;
    img.alt = `${book.title} cover`;
    img.style.width = '100px'; // Optional styling
    li.appendChild(img);

    // Style the list item based on read status
    li.style.backgroundColor = book.alreadyRead ? 'green' : 'red';
    li.style.color = 'white';
    li.style.margin = '1em 0';
    li.style.padding = '1em';
    li.style.listStyle = 'none';
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.gap = '1em';

    ul.appendChild(li);
  });

  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
