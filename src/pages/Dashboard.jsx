import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import OrderCard from "../components/OrderCard";
export default function Dashboard() {
  const { orders, isLoading, error } = useContext(OrderContext);
  const totalOrders = orders.length;
  const totalSales = orders.reduce((sum, order) => sum + (order.total ?? 0), 0);
  const totalProducts = orders.reduce(
    (sum, order) => sum + order.totalProducts,
    0,
  );
  const totalQuantity = orders.reduce(
    (sum, order) => sum + order.totalQuantity,
    0,
  );
  const recentOrders = orders.slice(-5).reverse();
  if (error) {
    return <p className="text-danger fw-bold fs-5 text-center my-5">{error}</p>;
  }
  if (isLoading) {
    return <p className="mx-auto">Loading...</p>;
  }
  return (
    <div className="dashboard">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Overview of your orders</p>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-sm-6 col-lg-3 mb-4">
          <div className="dashboard-card">
            <h5>Total Orders</h5>
            <h2>{totalOrders}</h2>
          </div>
        </div>

        <div className="col-10 mx-auto col-sm-6 col-lg-3 mb-4">
          <div className="dashboard-card">
            <h5>Total Sales</h5>
            <h2>${totalSales}</h2>
          </div>
        </div>

        <div className="col-10 mx-auto col-sm-6 col-lg-3 mb-4">
          <div className="dashboard-card">
            <h5>Total Products</h5>
            <h2>{totalProducts}</h2>
          </div>
        </div>

        <div className="col-10 mx-auto col-sm-6 col-lg-3 mb-4">
          <div className="dashboard-card">
            <h5>Total Quantity</h5>
            <h2>{totalQuantity}</h2>
          </div>
        </div>
      </div>
      <h2 className="section-title">Recent Orders</h2>
      <div className="row">
        {recentOrders.map((cart) => (
          <OrderCard key={cart.id} cart={cart} />
        ))}
      </div>
    </div>
  );
}
