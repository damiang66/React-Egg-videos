import { useEffect, useState } from "react"
import { CardPage } from "./Cardpage"
import { findAll } from "../service/RickService"

export const Cards=()=>{
    const [personajes,setPersonajes]=useState([])
    
    const consumiendoApi = async()=>{
        const respuesta = await findAll()
        setPersonajes(respuesta.data.results)
      //  console.log(respuesta.data);
       
       
    }
   useEffect(()=>{
    consumiendoApi()
   },[])

    return (
        <>
        <div className="album py-5 bg-body-tertiary">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
                      {personajes.map(m=>(<CardPage m={m} key={m.id}/>))}
                    </div>
                </div>
            </div>
        </>
    )
}