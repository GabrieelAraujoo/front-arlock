import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";
import HomeAdm from "./pages/dashboard/Adm/index";
import PerfilAdm from "./pages/dashboard/Adm/perfil";
import AlunosAdm from "./pages/dashboard/Adm/alunos";
import Esqueceu from "./pages/login/Esqueceu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Adm/Home" element={<HomeAdm />} />
        <Route path="/Adm/Perfil" element={<PerfilAdm />} />
        <Route path="/Adm/Alunos" element={<AlunosAdm />} />
        <Route path="/Esqueceu" element={<Esqueceu />} />
      </Routes>
    </div>
  );
}

export default App;
