import { useContext, useEffect, useState } from "react";
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
  if (error) {
    return <p className="text-danger fw-bold fs-5 text-center my-5">{error}</p>;
  }

  if (!order) {
    return <LoadingDetails />;
  }

  return (
    <div className="details-page">
      <div className="page-header">
        <h1>Order Details</h1>
        <p>Information about this order</p>
      </div>
      <div className="details-card p-3 p-md-5 rounded-4">
        <p>Order ID: {order.id}</p>
        <p>User ID: {order.userId}</p>
        <p>Total: ${order.total}</p>
        <p>Total Products: {order.totalProducts}</p>
        <p>Total Quantity: {order.totalQuantity}</p>
        <h2 className="mt-5 mb-4">Products</h2>
        <div className="row">
          {order.products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-4 mb-4">
              <div className="order-card rounded-4 p-3 d-flex">
                <img src={product.thumbnail} className="card-img border rounded-4 w-50 my-auto" alt="image product" />
                <div className="card-body w-50 text-center">
                  <h5 className="card-title mb-2">{product.title}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Quantity: {product.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
