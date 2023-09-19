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
import Cadastro from "./pages/login/CadastroAlunos";
import EsqueceuSenha from "./pages/login/EsqueceuSenha";
import MensagemEmail from "./pages/login/MensagemEmail";
import { LogOff, LoginContainer, LoginAdmContainer } from "./layout/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LogOff>
              <Login />
            </LogOff>
          }
        />
        <Route
          path="/Cadastro"
          element={
            <LogOff>
              <Cadastro />
            </LogOff>
          }
        />
        <Route
          path="/EsqueceuSenha"
          element={
            <LogOff>
              <EsqueceuSenha />
            </LogOff>
          }
        />
        <Route
          path="/MensagemEmail"
          element={
            <LogOff>
              <MensagemEmail />
            </LogOff>
          }
        />
        <Route
          path="/Aluno/Home"
          element={
            <LoginContainer>
              <HomeAluno />
            </LoginContainer>
          }
        />
        <Route
          path="/Aluno/Perfil"
          element={
            <LoginContainer>
              <PerfilAluno />
            </LoginContainer>
          }
        />
        <Route
          path="/Aluno/Armarios"
          element={
            <LoginContainer>
              <Armarios />
            </LoginContainer>
          }
        />
        <Route
          path="/Adm/Home"
          element={
            <LoginAdmContainer>
              <HomeAdm />
            </LoginAdmContainer>
          }
        />
        <Route
          path="/Adm/Perfil"
          element={
            <LoginAdmContainer>
              <PerfilAdm />
            </LoginAdmContainer>
          }
        />
        <Route
          path="/Adm/Alunos"
          element={
            <LoginAdmContainer>
              <AlunosAdm />
            </LoginAdmContainer>
          }
        />
        <Route
          path="/Adm/Usuarios"
          element={
            <LoginAdmContainer>
              <UsuariosAdm />
            </LoginAdmContainer>
          }
        />
        <Route
          path="/Adm/NovoUsuario"
          element={
            <LoginAdmContainer>
              <NewUsuarioAdm />
            </LoginAdmContainer>
          }
        />
        <Route
          path="/Adm/Armarios"
          element={
            <LoginAdmContainer>
              <ArmariosAdm />
            </LoginAdmContainer>
          }
        />
        <Route
          path="/Adm/NovoArmario"
          element={
            <LoginAdmContainer>
              <NewArmarioAdm />
            </LoginAdmContainer>
          }
        />
        <Route
          path="/Adm/Alugueis"
          element={
            <LoginAdmContainer>
              <AlugueisAdm />
            </LoginAdmContainer>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
