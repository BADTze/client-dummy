import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
});

export const authApi = {
  login: async (email: string, nik: string) => {
    const res = await api.post("/auth/login", { email, nik });
    return res.data;
  },
  register: async (data: any) => {
    const res = await api.post("/auth/register", data);
    return res.data;
  },
};

export default api;
