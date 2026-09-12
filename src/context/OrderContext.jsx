import { createContext, useState, useEffect } from "react";
import { getOrder } from "../services/orderApi";

const OrderContext = createContext();
function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
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

  return (
    <OrderContext.Provider value={{ orders, setOrders, isLoading, error }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderProvider };
