import React from "react";

export default function OrderCard({cart}) {
  return (
    <div className="card col-2 m-1 py-2">
      <p className="card-text">order: {cart.id}</p>
      <p className="card-text">User Id: {cart.userId}</p>
      <p className="card-text">Total: {cart.total}</p>
      <p className="card-text">Products: {cart.totalProducts}</p>
      <p className="card-text">Quantity: {cart.totalQuantity}</p>
    </div>
  );
}
