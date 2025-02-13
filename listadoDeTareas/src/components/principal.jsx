import { useState, useEffect } from "react";
import {Tabla} from './tabla.jsx';
import {Formulario} from './formulario.jsx';
import {obtenerValores} from '../js/simuladorServicio.js';
import {Cargando} from './Cargando.jsx';

const ArregloTareas = [];

const Principal = () => {

const [tareas, setTareas] = useState(ArregloTareas);
const [cargando,setCargando] = useState(false);

async function buscar() {
    try {
        setCargando(true);
        const nuevalista = await obtenerValores();
        return ({mensaje:"Exitoso",lista:nuevalista});
    } catch (error) {
        throw new Error("Ocurrió un error");
    }
}


useEffect(()=>{
buscar().then(({mensaje,lista})=>{
    setTareas([...tareas,...lista]);
    setCargando(false);
    }).catch(console.error)
},[]);

useEffect(() => {
}, [tareas]); // Se ejecuta cada vez que tareas cambia

useEffect(()=>{console.log("Cambio estatus en cargando")},[cargando])

const crearTarea =(nuevaTarea)=>{
    console.log(nuevaTarea);
    setTareas([...tareas,nuevaTarea]);
}

    return (<>
        <Cargando loading={cargando}/>
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