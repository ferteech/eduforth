function ModoAbrazo({ volver }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">🤗 Modo Abrazo</h1>
      <p className="text-lg text-blue-700 mb-6 max-w-md">
        Respira. Estás haciendo lo mejor que puedes. A veces, lo que necesitas no es rendirte, sino darte un abrazo.
      </p>

      <div className="bg-white shadow-md p-6 rounded-xl max-w-sm">
        <p className="text-md text-gray-700 italic">
          “Eres más fuerte de lo que crees, y tu proceso también merece amor.”
        </p>
      </div>

      <button
        onClick={volver}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition"
      >
        Volver al Dashboard
      </button>
    </div>
  );
}

export default ModoAbrazo;
