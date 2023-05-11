import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import { findBYId } from "../service/RickService";

export const Detalle = ()=>{
    const {id}= useParams();
    const[m, setM]= useState({});
    const traer = async(id)=>{
        const respuesta = await findBYId(id)
        setM(respuesta.data)

        console.log(respuesta.data);
    }
    useEffect(()=>{
    traer(id)
        
    },[id])
    return (<>
    <div className="card shadow-sm m-5">
                    <img className="bd-placeholder-img " width="25%" height="25%" src={m.image}/>
                    <h3 className="mb-0 text-dark">{m.name}</h3>
                    <div className="card-body">
                        <p className="card-text">{m.species}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
              <NavLink className="btn btn-primary btn-sm m-4" to={"/api"}>Volver</NavLink>
    </>)
}