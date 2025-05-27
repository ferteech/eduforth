export default function Testimonios({ volver }) {
  const testimonios = [
    {
      nombre: "Miriam, 20 años",
      mensaje: "Me comparaba con mis compañer@s todo el tiempo. Ahora sé que lo mío es la educación y me siento más segura.",
    },
    {
      nombre: "Sebastián, 19 años",
      mensaje: "EduForth me ayudó a entender que puedo unir sostenibilidad y tecnología. ¡Estoy emocionado por mi futuro!",
    },
    {
      nombre: "Ana, 21 años",
      mensaje: "No sabía ni por dónde empezar. Hoy tengo claridad y siento que por fin encontré mi rumbo.",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">💬 Historias de jóvenes como tú</h2>

      <div className="space-y-4 max-w-md mx-auto">
        {testimonios.map((t, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-4">
            <p className="text-gray-700 italic mb-2">“{t.mensaje}”</p>
            <p className="text-sm text-right text-gray-500">{t.nombre}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={volver}
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          🔙 Volver al Dashboard
        </button>
      </div>
    </div>
  );
}
