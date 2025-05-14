function TestVocacional({ volver }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">🧠 Test Vocacional</h1>

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <p className="font-semibold mb-2">1. ¿Qué actividad disfrutas más?</p>
        <ul className="mb-4 space-y-2">
          <li><button className="w-full px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded">Resolver problemas lógicos</button></li>
          <li><button className="w-full px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded">Ayudar a otras personas</button></li>
          <li><button className="w-full px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded">Crear o diseñar cosas</button></li>
        </ul>

        <p className="font-semibold mb-2">2. ¿Qué te motiva más?</p>
        <ul className="mb-4 space-y-2">
          <li><button className="w-full px-4 py-2 bg-green-100 hover:bg-green-200 rounded">Tener libertad y tiempo</button></li>
          <li><button className="w-full px-4 py-2 bg-green-100 hover:bg-green-200 rounded">Mejorar mi entorno</button></li>
          <li><button className="w-full px-4 py-2 bg-green-100 hover:bg-green-200 rounded">Lograr metas claras</button></li>
        </ul>

        <button
          onClick={volver}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Ver Resultado
        </button>
      </div>

      <button
        onClick={volver}
        className="mt-6 text-sm text-blue-600 hover:underline"
      >
        ⬅ Volver al Dashboard
      </button>
    </div>
  );
}

export default TestVocacional;
