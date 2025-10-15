import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authApi } from "../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nik: "",
    nama: "",
    email: "",
    jabatan: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authApi.register(form);
      navigate("/login");
    } catch (err: any) {
      setError("Gagal mendaftarkan akun!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <input
          name="nik"
          placeholder="NIK"
          className="border rounded w-full p-2 mb-2"
          onChange={handleChange}
          required
        />
        <input
          name="nama"
          placeholder="Nama"
          className="border rounded w-full p-2 mb-2"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border rounded w-full p-2 mb-2"
          onChange={handleChange}
          required
        />
        <input
          name="jabatan"
          placeholder="Jabatan (opsional)"
          className="border rounded w-full p-2 mb-3"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Register
        </button>

        <p className="text-sm text-center mt-3">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
