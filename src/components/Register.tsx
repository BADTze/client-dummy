import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authApi } from "../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nik: "",
    nama: "",
    email: "",
    password: "",
    jabatan: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authApi.register(form);
      alert("Registrasi berhasil!");
      navigate("/login");
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Gagal registrasi");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-96"
      >
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        {["nik", "nama", "email", "password", "jabatan"].map((field) => (
          <div key={field} className="mb-3">
            <label className="block text-sm font-medium capitalize mb-1">
              {field}
            </label>
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              value={(form as any)[field]}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required={field !== "jabatan"}
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
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
