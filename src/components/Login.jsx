import { useState } from "react";

function Login({ onLogin, setNombreUsuario }) {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const manejarIngreso = () => {
    if (nombre.trim()) {
      setNombreUsuario(nombre);
      onLogin();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">EduForth</h1>
      <p className="text-md text-green-700 mb-6">Conócete. Descubre tu camino.</p>

      <input
        type="text"
        placeholder="Tu nombre"
        className="mb-4 px-4 py-2 rounded border border-gray-300 w-64"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Edad"
        className="mb-6 px-4 py-2 rounded border border-gray-300 w-64"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />

      <button
        onClick={manejarIngreso}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
