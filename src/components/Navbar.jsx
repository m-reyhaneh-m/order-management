import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <aside className="sidebar d-flex flex-md-column justify-content-between justify-content-md-start py-md-4 px-md-3 py-3 px-4">
      <div className="sidebar-brand mb-md-5 m-0">Order Panel</div>
      <nav className="sidebar-nav d-flex flex-md-column gap-md-2">
        <NavLink className="sidebar-link rounded-2" to="order-management/">
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
