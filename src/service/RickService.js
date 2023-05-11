import axios from "axios"
import { API } from "../constantes/constantes"
//url = 'https://rickandmortyapi.com/api/'
const findAll=async()=>{
return await axios.get(API.PERSONAJES());


}
const findBYId = async(id)=>{
    const respuesta = await axios.get(API.PERSONAJES_ID(id));
    //console.log(respuesta);
    return respuesta;
}

export {
    findAll,
    findBYId
}