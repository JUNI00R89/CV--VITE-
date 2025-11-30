
// import React from "react";
// import {
//   cabecera,
//   perfil,
//   educacion,
//   experiencia,
//   stackTecnologias,
//   proyectos,
//   habilidades
// } from "./components/data/cvData";



import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
// import Proyectos from "./components/Proyectos.jsx";
// import Habilidades from "./components/Habilidades.jsx";

function App() {
  return (
    <div className="cv-container">
      <CabeceraCV />
      <Perfil />
      <Educacion />
      <Experiencia />
    </div>
  );
}

export default App;
