
import { NavBar } from "./componentes/navBar"

import { MainPage } from "./componentes/MainPage"
import { FooterPage } from "./componentes/FooterPage"

import { Navigate, Route, Routes } from "react-router-dom"
import { Boton } from "./componentes/Boton"

import { Detalle } from "./componentes/Detalle"
import { Formulario } from "./componentes/Formulario"

export const App = () => {

  return (<>
    <NavBar />
    <Routes>
      <Route path="api" element={<MainPage />} />
      <Route path="/" element={<Navigate to={"/api"} />} />
      <Route path="/formulario" element={<Formulario/>}/>
      <Route path={"/detalle/:id"} element={<Detalle />} />
      <Route path="boton" element={<Boton />} />
    </Routes>


    <FooterPage />


  </>)
}