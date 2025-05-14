function Explora({ volver }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-blue-100 p-6 text-center">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">📚 Explora tu propósito</h1>
      <p className="text-md text-green-700 mb-6 max-w-md">
        Encuentra ideas que conecten con tu forma de ser y tus talentos. Todos tenemos algo valioso que aportar.
      </p>

      <div className="grid gap-4 max-w-lg w-full">
        <div className="bg-white shadow-md p-4 rounded-xl">
          <h2 className="font-semibold text-blue-600">🌿 Medio ambiente</h2>
          <p className="text-sm text-gray-600">Protege el planeta con acciones sostenibles y educación ecológica.</p>
        </div>

        <div className="bg-white shadow-md p-4 rounded-xl">
          <h2 className="font-semibold text-blue-600">💡 Innovación y tecnología</h2>
          <p className="text-sm text-gray-600">Crea soluciones digitales que mejoren la vida de las personas.</p>
        </div>

        <div className="bg-white shadow-md p-4 rounded-xl">
          <h2 className="font-semibold text-blue-600">🧠 Educación y guía</h2>
          <p className="text-sm text-gray-600">Comparte lo que sabes y ayuda a otros a crecer personal o profesionalmente.</p>
        </div>
      </div>

      <button
        onClick={volver}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition"
      >
        Volver al Dashboard
      </button>
    </div>
  );
}

export default Explora;
