import { useContext } from "react";
import OrderCard from "../components/OrderCard";
import Loading from "../Loading/Loading";
import { OrderContext } from "../context/OrderContext";

export default function Orders() {
  const { orders, isLoading, error } = useContext(OrderContext);
  if (error) {
    return <p className="text-danger fw-bold fs-5 text-center my-5">{error}</p>;
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
