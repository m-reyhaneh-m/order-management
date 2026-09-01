import axios from "axios";

const getOrder = async () => {
  const response = await axios.get("https://dummyjson.com/carts");
  return response.data.carts;
};
export { getOrder };
