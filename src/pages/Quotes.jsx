import { useEffect, useState } from 'react'

function Quotes() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(res => res.json())
      .then(data => setQuotes(data))
  }, [])

  return (
    <div>
      <h1 className="page-title">Seuss Treasury</h1>
      <div className="quotes-container">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <p>“{quote.text}”</p>
            <p className="quote-source">— Dr. Seuss in <em>{quote.book.title}</em></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quotes;
