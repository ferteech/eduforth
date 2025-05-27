import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import TestVocacional from "./components/TestVocacional";
import ModoAbrazo from "./components/ModoAbrazo";
import Explora from "./components/Explora";
import Testimonios from "./components/Testimonios"; // ✅ Import correcto aquí

function App() {
  const [pantalla, setPantalla] = useState("login");
  const [nombreUsuario, setNombreUsuario] = useState("");

  const cambiarPantalla = (nueva) => {
    setPantalla(nueva);
  };

  return (
    <>
      {pantalla === "login" && (
        <Login
          onLogin={() => cambiarPantalla("dashboard")}
          setNombreUsuario={setNombreUsuario}
        />
      )}
      {pantalla === "dashboard" && (
        <Dashboard
          cambiarPantalla={cambiarPantalla}
          nombre={nombreUsuario}
        />
      )}
      {pantalla === "test" && (
        <TestVocacional volver={() => cambiarPantalla("dashboard")} />
      )}
      {pantalla === "abrazo" && (
        <ModoAbrazo volver={() => cambiarPantalla("dashboard")} />
      )}
      {pantalla === "explora" && (
        <Explora volver={() => cambiarPantalla("dashboard")} />
      )}
      {pantalla === "testimonios" && (
        <Testimonios volver={() => cambiarPantalla("dashboard")} />
      )}
    </>
  );
}

export default App;
