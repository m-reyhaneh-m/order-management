import { createContext, useState, useEffect } from "react";
import { getOrder } from "../services/orderApi";

const OrderContext = createContext();
function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const loadOrders = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getOrder();
      setOrders(data);
    } catch (error) {
      console.log("error: ", error);
      setError("Failed to load orders!");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadOrders();
  }, []);
  return (
    <OrderContext.Provider
      value={{ orders, setOrders, isLoading, error, loadOrders }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderProvider };
