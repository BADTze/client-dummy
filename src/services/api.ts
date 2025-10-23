import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export const authApi = {
  register: async (data: {
    nik: string;
    nama: string;
    email: string;
    password: string;
    jabatan?: string;
  }) => {
    const res = await axios.post(`${API_URL}/register`, data);
    return res.data;
  },

  login: async (data: { email: string; password: string }) => {
    const res = await axios.post(`${API_URL}/login`, data);
    return res.data;
  },
};
