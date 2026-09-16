import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">
        Dashboard
      </Link>
      <Link className="nav-link" to="/orders">
        Orders
      </Link>
      <Link className="nav-link" to="/orders/new">
        AddOrder
      </Link>
    </nav>
  );
}
