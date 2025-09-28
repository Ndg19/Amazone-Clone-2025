import axios from "axios";
const axiosInstance = axios.create({
  // local instance of base url
  // baseURL: "http://localhost:5000",
  // deployed version of amazone server on render .com
  baseURL: " https://amazon-backend-mtyu.onrender.com",
});
export {axiosInstance}