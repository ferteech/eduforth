import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import TestVocacional from "./components/TestVocacional";
import ModoAbrazo from "./components/ModoAbrazo";
import Explora from "./components/Explora";

function App() {
  const [pantalla, setPantalla] = useState("login");
  const [nombreUsuario, setNombreUsuario] = useState(""); // NUEVO

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
          nombre={nombreUsuario} // PASAR NOMBRE AL DASHBOARD
        />
      )}
      {pantalla === "test" && <TestVocacional volver={() => cambiarPantalla("dashboard")} />}
      {pantalla === "abrazo" && <ModoAbrazo volver={() => cambiarPantalla("dashboard")} />}
      {pantalla === "explora" && <Explora volver={() => cambiarPantalla("dashboard")} />}
    </>
  );
}

export default App;
