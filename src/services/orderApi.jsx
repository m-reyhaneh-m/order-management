import axios from "axios";

const getOrder = async () => {
  const response = await axios.get("https://dummyjson.com/carts");
  return response.data.carts;
};
const getOrderById = async(id)=>{
  const response = await axios.get(`https://dummyjson.com/carts/${id}`)
  return response.data
}
export { getOrder, getOrderById };
