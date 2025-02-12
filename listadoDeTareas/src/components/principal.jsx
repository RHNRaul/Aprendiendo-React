import { useState, useEffect } from "react";
import {Tabla} from './tabla.jsx';
import {Formulario} from './formulario.jsx'

const ArregloTareas = [];

const Principal = () => {

const [tareas, setTareas] = useState(ArregloTareas);

useEffect(() => {
}, [tareas]); // Se ejecuta cada vez que tareas cambia

const crearTarea =(nuevaTarea)=>{
    console.log(nuevaTarea);
    setTareas([...tareas,nuevaTarea]);
}

    return (<>
        <div className="container">
            <div className="card my-3">
                <div className="card-header">
                    <h3>Lista de Tareas</h3>
                </div>
                <div className="card-body">  
                <Tabla filas={tareas}/>   
                <Formulario agregar={crearTarea}/>
                </div>
            </div>
        </div>
    </>);

}


export default { Principal };
export { Principal }