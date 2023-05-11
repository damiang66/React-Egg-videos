import { useState } from "react"


export const useFormulario = (initialState = {})=>{
    const [form,setForm]=useState(initialState);
    const handlerCambio =({target})=>{
        const {name,value}=target;
        //console.log('target', target);
       // console.log('name', name);
       // console.log('value', value);
        setForm(
            {
                ...form,
                [name]:value,
            }
        )
        

    }
    return{
        form,setForm,handlerCambio,
    }
}
