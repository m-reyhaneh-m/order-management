import { useContext } from "react";
import { Link } from "react-router-dom";
import { deleteOrder } from "../services/orderApi";
import { OrderContext } from "../context/OrderContext";

export default function OrderCard({ cart }) {
  const { setOrders } = useContext(OrderContext);
  const handleDelete = async () => {
    try {
      await deleteOrder(cart.id);
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== cart.id),
      );
    } catch (error) {
      console.log("Error deleting order:", error);
    }
  };
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="order-card h-100 rounded-4 p-4 d-flex flex-column">
        <p className="card-text">order: {cart.id}</p>
        <p className="card-text">User ID: {cart.userId}</p>
        <p className="card-text">Total: {cart.total}</p>
        <p className="card-text">Products: {cart.totalProducts}</p>
        <p className="card-text">Quantity: {cart.totalQuantity}</p>
        <div className="d-flex justify-content-between mt-3">
          <button onClick={handleDelete} className="btn btn-outline-danger mx-1">
            Delete
          </button>
          <Link to={`/orders/${cart.id}`} className="btn btn-outline-primary mx-1">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
