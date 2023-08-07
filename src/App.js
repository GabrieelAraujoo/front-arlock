import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";
import HomeAdm from "./pages/dashboard/Adm/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Adm/Home" element={<HomeAdm />} />
      </Routes>
    </div>
  );
}

export default App;
