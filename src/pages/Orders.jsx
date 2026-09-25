import { useContext } from "react";
import OrderCard from "../components/OrderCard";
import Loading from "../Loading/Loading";
import { OrderContext } from "../context/OrderContext";

export default function Orders() {
  const { orders, isLoading, error, loadOrders } = useContext(OrderContext);
  if (error) {
    return (
      <div className="fw-bold fs-5 text-center my-5">
        <p className="text-danger">{error}</p>
        <button className="btn btn-outline-danger fw-bold" onClick={loadOrders} disabled={isLoading}>
          {isLoading ? "Loading..." : "Retry"}
        </button>
      </div>
    );
  }
  return (
    <div className="order-page">
      <div className="page-header">
        <h1>Orders</h1>
        <p>Manage all orders</p>
      </div>
      <div className="row">
        {isLoading ? (
          <Loading />
        ) : (
          orders.map((cart) => <OrderCard key={cart.id} cart={cart} />)
        )}
      </div>
    </div>
  );
}
