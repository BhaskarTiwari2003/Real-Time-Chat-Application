import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "https://chat-backend-heo9.onrender.com/api", // ✅ Replace with your real backend URL
  withCredentials: true,
});
