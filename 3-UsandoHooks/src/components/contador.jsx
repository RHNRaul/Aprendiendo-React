import {useState} from "react";
export const contador = () =>{

    const[contar, setContar]=useState(0);

    function manejarContador(){
        setContar(contar+1);
        console.log("Clickeado "+contar);
    }

    return (
        <>
        <h1>
        Contando : {contar};
        </h1>
        <button onClick={manejarContador}>CONTAR</button>
        </>        
    );
}
export default {contador};