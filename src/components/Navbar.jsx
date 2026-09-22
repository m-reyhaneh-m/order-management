import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <aside className="sidebar d-flex flex-md-column justify-content-between justify-content-md-start py-4 px-3">
    <div className="sidebar-brand mb-md-5">
      Order Panel
    </div>
      <nav className="sidebar-nav d-flex flex-md-column gap-2">
      <NavLink className="sidebar-link rounded-2" to="/">
        Dashboard
      </NavLink>
      <NavLink className="sidebar-link rounded-2" to="/orders" end>
        Orders
      </NavLink>
      <NavLink className="sidebar-link rounded-2" to="/orders/new">
        AddOrder
      </NavLink>
    </nav>
    </aside>
  );
}