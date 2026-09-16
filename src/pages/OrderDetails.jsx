import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../services/orderApi";
import LoadingDetails from "../Loading/LoadingDetails";
import { OrderContext } from "../context/OrderContext";

export default function OrderDetails() {
  const [order, setOrder] = useState();
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { orders } = useContext(OrderContext);
  useEffect(() => {
    const loadOrder = async () => {
      try {
        const contextOrder = orders.find((order) => order.id === Number(id));
        if (contextOrder) {
          setOrder(contextOrder);
          return;
        }
        const data = await getOrderById(id);
        setOrder(data);
      } catch (error) {
        console.log("error: ", error);
        setError("!دریافت سفارش با خطا مواجه شد");
      }
    };
    loadOrder();
  }, [id, orders]);
  console.log(order);
  if (error) {
    return <p className="text-danger fw-bold fs-5 text-center my-5">{error}</p>;
  }

  if (!order) {
    return <LoadingDetails />;
  }

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {order.id}</p>
      <p>User ID: {order.userId}</p>
      <p>Total: ${order.total}</p>
      <p>Total Products: {order.totalProducts}</p>
      <p>Total Quantity: {order.totalQuantity}</p>
      <h2>Products</h2>
      {order.products.map((product) => (
        <div key={product.id}>
          <p>Product: {product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ))}
    </div>
  );
}
