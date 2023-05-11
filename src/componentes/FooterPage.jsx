import { useState } from "react";

export const FooterPage = () => {
    const[click,setClick]=useState(0);
    const hacerClick=()=>{
        setClick(click+1)
    }
    let programador = 'damian';
    return (
        <>
            <footer className="text-body-secondary py-5">
                <div className="container">
                    <p className="float-end mb-1">
                        <a href="#">Arriba</a>
                    </p>
                    <p className="mb-1">programado por {programador}</p>
                    <img src="./img/tatuajeHijas.jpg" alt="tatoo"
                    height={52} 
                    onClick={hacerClick}
                    />
                    <p className="float-end mb-1"> Clicks={click}</p>
                </div>
            </footer>
        </>
    )
}