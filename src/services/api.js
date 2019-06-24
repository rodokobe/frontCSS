import axios from "axios";

const api = axios.create({
  baseURL: `https://http://localhost:4000/`
});

export default api;
