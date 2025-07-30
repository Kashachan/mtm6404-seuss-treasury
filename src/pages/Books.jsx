import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(res => res.json())
      .then(data => {
        console.log('Book list:', data); 
        setBooks(data);
      });
  }, []);

  return (
    <div>
      <h1 className="page-title">Seuss Treasury</h1>
      <div className="books-container">
        {books.map((book, index) => (
          <Link to={`/book/${book.id}`} key={index} className="book-item">
            <img 
              src={book.image}
              alt={book.title}
              className="book-cover"
            />
            <div className="book-title">{book.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Books;
