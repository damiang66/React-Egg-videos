import { useState } from "react"
import { NavBar } from "./componentes/navBar"
import Swal from "sweetalert2"
import { MainPage } from "./componentes/MainPage"
import { FooterPage } from "./componentes/FooterPage"

export const App = ()=>{
const[valor,setValor]=useState(0)
const sumar =()=>{
  setValor(valor+1);
}
const restar=()=>{
  if(valor==0){
    return Swal.fire('Error', "ya llego a cero",'error')
  }
  setValor(valor-1)
}
  return (<>
  <NavBar />
 <h1>Egg</h1>
 <button onClick={()=>sumar()} className="btn btn-primary m-4">Sumar</button>
 <button onClick={()=>restar()} className="btn btn-primary m-4">Restar</button>
 <h4>{valor}</h4>
 <MainPage/>
 <FooterPage/>


  </>)
}