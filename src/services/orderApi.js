import axios from "axios";

const getOrder = async () => {
  const maxRetries = 2;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await axios.get("https://dummyjson.com/carts", {
        timeout: 10000,
      });

      return response.data.carts;
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }

      const delay = 1000 * (attempt + 1);

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

const getOrderById = async (id) => {
  const response = await axios.get(`https://dummyjson.com/carts/${id}`);

  return response.data;
};

const addOrder = async (data) => {
  const response = await axios.post("https://dummyjson.com/carts/add", data);

  return response.data;
};

const deleteOrder = async (id) => {
  await axios.delete(`https://dummyjson.com/carts/${id}`);
};

export { getOrder, getOrderById, addOrder, deleteOrder };
