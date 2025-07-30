import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="title">Seuss Treasury</h1>
      <ul className="nav-links">
        <li><Link to="/">Books</Link></li>
        <li><Link to="/quotes">Quotes</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
