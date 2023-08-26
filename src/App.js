import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";
import HomeAdm from "./pages/dashboard/Adm/index";
import PerfilAdm from "./pages/dashboard/Adm/perfil";
import AlunosAdm from "./pages/dashboard/Adm/alunos";
import HomeAluno from "./pages/dashboard/Aluno";
import PerfilAluno from "./pages/dashboard/Aluno/perfil";
import { Armarios } from "./pages/dashboard/Aluno/Armarios";
import UsuariosAdm from "./pages/dashboard/Adm/usuario";
import NewUsuarioAdm from "./pages/dashboard/Adm/usuario_novo";
import ArmariosAdm from "./pages/dashboard/Adm/armarios";
import NewArmarioAdm from "./pages/dashboard/Adm/armario_novo";
import AlugueisAdm from "./pages/dashboard/Adm/alugueis";
import Cadastro from "./pages/login/Cadastro";

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
        <Route path="/Aluno/Home" element={<HomeAluno />} />
        <Route path="/Aluno/Perfil" element={<PerfilAluno />} />
        <Route path="/Aluno/Armarios" element={<Armarios />} />
        <Route path="/Adm/Usuarios" element={<UsuariosAdm />} />
        <Route path="/Adm/NovoUsuario" element={<NewUsuarioAdm />} />
        <Route path="/Adm/Armarios" element={<ArmariosAdm />} />
        <Route path="/Adm/NovoArmario" element={<NewArmarioAdm />} />
        <Route path="/Adm/Alugueis" element={<AlugueisAdm />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Esqueceu" element={<Esqueceu />} />
      </Routes>
    </div>
  );
}

export default App;
