export default function Dashboard({ cambiarPantalla, nombre }) {
  return (
    <div className="p-6 text-center bg-blue-50 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">¡Hola, {nombre}! 👋</h2>
      <p className="text-green-700 mb-6">
        Bienvenido a tu espacio en EduForth. Hoy es un buen día para conocerte más.
      </p>

      <div className="flex flex-col gap-4 max-w-xs mx-auto">
        <button
          onClick={() => cambiarPantalla("test")}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl text-lg"
        >
          🧠 Test Vocacional
        </button>

        <button
          onClick={() => cambiarPantalla("abrazo")}
          className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl text-lg"
        >
          🤗 Modo Abrazo
        </button>

        <button
          onClick={() => cambiarPantalla("explora")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl text-lg"
        >
          📚 Explora tu Propósito
        </button>

        <button
          onClick={() => cambiarPantalla("testimonios")}
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl text-lg"
        >
          💬 Ver Testimonios
        </button>

        <button
          onClick={() => cambiarPantalla("login")}
          className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-lg"
        >
          🔙 Salir
        </button>
      </div>

      <div className="mt-10 text-blue-800 text-md">
        🌍 Otros jóvenes también están explorando propósito en <span className="font-semibold">tecnología</span>, <span className="font-semibold">educación</span> y <span className="font-semibold">sostenibilidad</span>.
      </div>

      <div className="mt-6 bg-white shadow-md p-4 rounded-xl text-left max-w-md mx-auto">
        <p className="italic text-gray-700 mb-2">
          “Antes no sabía qué hacer con mi vida. EduForth me ayudó a entender mis talentos y ahora me siento más seguro de estudiar ingeniería ambiental.”
        </p>
        <p className="text-sm text-gray-500 text-right">– Camila, 17 años</p>
      </div>
    </div>
  );
}
