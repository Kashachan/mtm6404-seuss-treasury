import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-detail-container">
      <img src={book.image} alt={book.title} className="book-detail-image"/>
      
      <div className="book-detail-info">
        <h1>{book.title}</h1>
        <p>{book.description}</p>
      </div> 
    </div>
  );
}

export default BookDetail;

