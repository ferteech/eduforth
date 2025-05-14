function Dashboard({ cambiarPantalla }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-green-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">¡Bienvenido a EduForth!</h1>
      <p className="text-md text-green-700 mb-6 text-center">Elige lo que quieres explorar hoy:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        <button
          onClick={() => cambiarPantalla("test")}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
        >
          🧠 Test Vocacional
        </button>

        <button
          onClick={() => cambiarPantalla("abrazo")}
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
        >
          🤗 Modo Abrazo
        </button>

        <button
          onClick={() => cambiarPantalla("explora")}
          className="bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-xl transition"
        >
          📚 Explora Propósitos
        </button>

        <button
          onClick={() => cambiarPantalla("login")}
          className="bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl transition"
        >
          🔙 Salir
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
