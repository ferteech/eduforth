import { useState } from "react";

export default function TestVocacional({ volver }) {
  const [respuesta1, setRespuesta1] = useState("");
  const [respuesta2, setRespuesta2] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const manejarResultado = () => {
    if (respuesta1 && respuesta2) {
      setMostrarResultado(true);
    }
  };

  const obtenerFrase = () => {
    if (respuesta1 === "tecnologia" && respuesta2 === "crear") {
      return "🚀 La tecnología necesita tu creatividad. ¡Confía en tu mente y construye el futuro!";
    }
    if (respuesta1 === "naturaleza" && respuesta2 === "ayudar") {
      return "🌱 Tu conexión con el planeta puede inspirar grandes cambios. ¡Eres parte de la solución!";
    }
    if (respuesta1 === "enseñar" && respuesta2 === "impactar") {
      return "📚 Enseñar es dejar huella en la vida de otros. ¡Tienes el poder de transformar realidades!";
    }
    return "✨ Todos tenemos un propósito, y tú estás más cerca de descubrirlo.";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      {!mostrarResultado ? (
        <>
          {/* Pregunta 1 */}
          <h2 className="text-xl font-bold text-blue-700 mb-4">1. ¿Qué actividad disfrutas más?</h2>
          <button
            onClick={() => setRespuesta1("tecnologia")}
            className={`w-64 py-2 mb-2 rounded ${respuesta1 === "tecnologia" ? "bg-blue-700 text-white" : "bg-blue-200 text-blue-900"}`}
          >
            💻 Programar o usar tecnología
          </button>
          <button
            onClick={() => setRespuesta1("naturaleza")}
            className={`w-64 py-2 mb-2 rounded ${respuesta1 === "naturaleza" ? "bg-green-700 text-white" : "bg-green-200 text-green-900"}`}
          >
            🌿 Estar en contacto con la naturaleza
          </button>
          <button
            onClick={() => setRespuesta1("enseñar")}
            className={`w-64 py-2 mb-6 rounded ${respuesta1 === "enseñar" ? "bg-yellow-700 text-white" : "bg-yellow-200 text-yellow-900"}`}
          >
            📖 Explicar cosas o enseñar a otros
          </button>

          {/* Pregunta 2 */}
          <h2 className="text-xl font-bold text-blue-700 mb-4">2. ¿Qué te motiva más?</h2>
          <button
            onClick={() => setRespuesta2("crear")}
            className={`w-64 py-2 mb-2 rounded ${respuesta2 === "crear" ? "bg-purple-700 text-white" : "bg-purple-200 text-purple-900"}`}
          >
            🎨 Crear cosas nuevas
          </button>
          <button
            onClick={() => setRespuesta2("ayudar")}
            className={`w-64 py-2 mb-2 rounded ${respuesta2 === "ayudar" ? "bg-pink-700 text-white" : "bg-pink-200 text-pink-900"}`}
          >
            ❤️ Ayudar a los demás
          </button>
          <button
            onClick={() => setRespuesta2("impactar")}
            className={`w-64 py-2 mb-4 rounded ${respuesta2 === "impactar" ? "bg-indigo-700 text-white" : "bg-indigo-200 text-indigo-900"}`}
          >
            🌟 Generar impacto positivo en la sociedad
          </button>

          {/* Ver resultado */}
          {respuesta1 && respuesta2 && (
            <button
              onClick={manejarResultado}
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              Ver resultado
            </button>
          )}
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl text-blue-700 font-semibold mb-4">Resultado del test</h3>
          <p className="text-green-700 text-lg mb-6">{obtenerFrase()}</p>
          <p className="text-sm text-blue-700 mt-2 italic">
            🌍 Otros jóvenes también están encontrando inspiración en esta área.
          </p>
          <button
            onClick={volver}
            className="mt-6 bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
          >
            🔙 Volver al Dashboard
          </button>
        </div>
      )}
    </div>
  );
}