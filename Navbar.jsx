import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        IRCTC<span>+</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Book Tickets</Link>
        <Link to="/ticket">My Trips</Link>
        <a href="#offers">Offers</a>
        <a href="#help">Help</a>

        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;