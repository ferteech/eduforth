export default function Dashboard({ cambiarPantalla, nombre }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">¡Hola, {nombre}! 👋</h2>
      <p className="text-green-700 mb-6">Bienvenido a tu espacio en EduForth</p>

      <div className="flex flex-col gap-4 max-w-xs mx-auto">
        <button onClick={() => cambiarPantalla("test")} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl">
          🧠 Test Vocacional
        </button>
        <button onClick={() => cambiarPantalla("abrazo")} className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl">
          🤗 Modo Abrazo
        </button>
        <button onClick={() => cambiarPantalla("explora")} className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl">
          📚 Explora tu Propósito
        </button>
        <button onClick={() => cambiarPantalla("login")} className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl">
          🔙 Salir
        </button>
      </div>
    </div>
  );
}
