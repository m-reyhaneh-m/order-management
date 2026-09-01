import React, { useEffect, useState } from "react";
import { getOrder } from "../services/orderApi";
import OrderCard from "../components/OrderCard";
export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const loadOrder = async () => {
      try {
        const data = await getOrder();
        setOrders(data);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    loadOrder();
  }, []);
  console.log(orders);
  return (
    <div className="row">
      {orders.map((cart) => (
        <OrderCard cart={cart} />
      ))}
    </div>
  );
}
