import React, { useContext, useEffect, useState } from "react";
import { getOrder } from "../services/orderApi";
import OrderCard from "../components/OrderCard";
import Loading from "../Loading/Loading";
import { OrderContext } from "../context/OrderContext";

export default function Orders() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {orders , setOrders} = useContext(OrderContext)
  useEffect(() => {
    const loadOrder = async () => {
      try {
        const data = await getOrder();
        setOrders(data);
      } catch (error) {
        console.log("error: ", error);
        setError("!دریافت سفارش ها با خطا مواجه شد");
      } finally {
        setIsLoading(false);
      }
    };

    loadOrder();
  }, []);
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
