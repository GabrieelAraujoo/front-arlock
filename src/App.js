import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";
import HomeAdm from "./pages/dashboard/Adm/index";
import PerfilAdm from "./pages/dashboard/Adm/perfil";
import AlunosAdm from "./pages/dashboard/Adm/alunos";
import UsuariosAdm from "./pages/dashboard/Adm/usuario";
import NewUsuarioAdm from "./pages/dashboard/Adm/usuario_novo";
import ArmariosAdm from "./pages/dashboard/Adm/armarios";
import NewArmarioAdm from "./pages/dashboard/Adm/armario_novo";
import AlugueisAdm from "./pages/dashboard/Adm/alugueis";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Adm/Home" element={<HomeAdm />} />
        <Route path="/Adm/Perfil" element={<PerfilAdm />} />
        <Route path="/Adm/Alunos" element={<AlunosAdm />} />
        <Route path="/Adm/Usuarios" element={<UsuariosAdm />} />
        <Route path="/Adm/NovoUsuario" element={<NewUsuarioAdm />} />
        <Route path="/Adm/Armarios" element={<ArmariosAdm />} />
        <Route path="/Adm/NovoArmario" element={<NewArmarioAdm />} />
        <Route path="/Adm/Alugueis" element={<AlugueisAdm />} />
      </Routes>
    </div>
  );
}

export default App;
