function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

document.addEventListener('DOMContentLoaded', fetchBooks);



// Call fetchBooks() when the index.html is loaded
document.addEventListener('DOMContentLoaded', fetchBooks);

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
