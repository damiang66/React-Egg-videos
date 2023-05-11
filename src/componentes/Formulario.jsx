
import { useEffect, useState } from "react"
import { useFormulario } from "../hooks/FormularioHooks"
import { save } from "../service/UsuarioService"
import Swal from "sweetalert2"
const inicialError = {
    nombre:"",
    password:"",
}
const inicialForm ={
    nombre:"",
    password:""

}
export const Formulario = ()=>{
    const{form,setForm,handlerCambio}=useFormulario()
    const[coincide,setCoincide]= useState(false);
    const [confirmar,setConfirmar]=useState()
    const[error,setError]= useState(false);
 const{nombre,password}=form;
    const handleConfirmar=(e)=>{
        setConfirmar(e.target.value)
    }
    useEffect(()=>{
//const {password}= form;
setCoincide(password=== confirmar)
    },[confirmar])
    const enviar =(e)=>{
        const{nombre,password}= form;
        e.preventDefault();
   //     try {
            console.log(nombre);
            console.log(password);
       //     const {nombre}= form;
       if (nombre!=undefined && password!=undefined){
        console.log(nombre);
        console.log(password);
        save(form) 
           
        Swal.fire('Exito', `El usuario ${nombre} fue creado con exito`,'info');
        setError(false)
        setForm(inicialForm);
       }else{

        setError(true);
        console.log(error);
       }
       
    //    } catch (error) {
            // console.log(error);    
   //         if (error.response && error.response.status ===404 ){
  //               setError(error.response.data);
    //        }
           
        }
        //aca llamamos al servicio para guardar en la base de datos
//console.log(form);
    
    return (<>
    <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Formulario</h5>

                    </div>
                    <form >
                        

                        <div className="modal-body">
                            {!error ?'':( <p className="text-danger">ingrese los datos correctamente</p>)}
                       
                            <input 
                            value={nombre}
                                onChange={handlerCambio}
                             type="text" className="form-control my-3 w-75" placeholder="nombre" 
                            name="nombre"/>
                         
                               <input 
                                value={password}
                               type="password"   onChange={handlerCambio} className="form-control my-3 w-75" placeholder="password" 
                            name="password"/>
                           
                            <input 
                               
                               type="password" onChange={handleConfirmar} className="form-control my-3 w-75" placeholder="repita password" 
                            />


                        </div>
                        {!coincide &&(
                        <div className="alert alert-danger">las claves no coinciden</div>)}
                        <div className="modal-footer">
                            {nombre==undefined || password== undefined ?'': <button disabled={!coincide } type="submit" onClick={enviar} className="btn btn-dark">Cargar</button>}
                       
                        </div>
                    </form>
                </div>
            </div>
        
    </>)
}