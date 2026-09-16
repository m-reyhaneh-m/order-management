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
    <div className="card col-2 m-1 py-2">
      <p className="card-text">order: {cart.id}</p>
      <p className="card-text">User Id: {cart.userId}</p>
      <p className="card-text">Total: {cart.total}</p>
      <p className="card-text">Products: {cart.totalProducts}</p>
      <p className="card-text">Quantity: {cart.totalQuantity}</p>
      <div className="card-footer d-flex justify-content-center">
        <button onClick={handleDelete} className="btn btn-danger mx-1">Delete</button>
        <Link to={`/orders/${cart.id}`} className="btn btn-primary mx-1">
          Details
        </Link>
      </div>
    </div>
  );
}
