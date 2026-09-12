import React, { useContext} from "react";
import OrderCard from "../components/OrderCard";
import Loading from "../Loading/Loading";
import { OrderContext } from "../context/OrderContext";

export default function Orders() {
  const { orders, isLoading, error } = useContext(OrderContext);
  if (error) {
    return <p className="text-danger fw-bold fs-5 text-center my-5">{error}</p>;
  } else {
    return (
      <div className="row mx-auto">
        {isLoading ? (
          <Loading />
        ) : (
          orders.map((cart) => <OrderCard key={cart.id} cart={cart} />)
        )}
      </div>
    );
  }
}
