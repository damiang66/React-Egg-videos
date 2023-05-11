import axios from "axios"
import { Await } from "react-router-dom";
import Swal from "sweetalert2";

const url ='http://localhost:8080/usuarios'
export const findAll = async()=>{
    try {
        
   const respuesta = await axios.get(url) 
   console.log(respuesta);
    
   return respuesta; 
    } catch (error) {
       Swal.fire('Error', 'Sistema caido', 'error'); 
    }
    return null;
   
}
export const findById = async(id)=>{
    try {
       const respuesta = await axios.get(`${url}/${id}`) 
       return respuesta;
    } catch (e) {
        Swal.fire('Error', `El usuario con id ${id} no existe`, 'error');
    }
}
export const save = async({nombre,password})=>{
    try {
        return  await axios.post(url,{
            nombre,
            password,
        });
    } catch (error) {
      return  error;
    }

}
export const editar = async({id,nombre,password})=>{
    try {
        return await axios.put(`${url}/${id}`,{
            nombre,
            password,
        })
    } catch (error) {
        throw error;
        
    }
}
export const eliminar = async(id)=>{
    try {
      await axios.delete(`${url}/${id}`)  
    } catch (e) {
        Swal.fire('Error', `El usuario con el id ${id} no se pudo eliminar`, 'error');
    }
}