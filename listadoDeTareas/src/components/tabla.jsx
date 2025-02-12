import {FilaTabla} from './filatabla.jsx';
const Tabla = ({filas}) =>{

    let id = 0;

    return(<table className="table table-success table-striped">
        <thead>
            <tr>
                <th>
                    <center><h4>TAREAS</h4></center>
                </th>
            </tr>
        </thead>
        <tbody>
            {filas.map(({tarea,descripcion},index)=>{
                return(
                <FilaTabla key = {index} id = {index} tarea={tarea} desc={descripcion}/>
                );
                })}
        </tbody>
    </table>);
}

export default {Tabla};
export {Tabla};