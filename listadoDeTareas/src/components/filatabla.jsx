import {ComponenteFila} from './componentefila.jsx'

const FilaTabla = ({tarea,desc})=>{
    return(
        <tr>
            <td>
            <center><ComponenteFila tarea = {tarea} desc={desc}/></center>
            </td>
        </tr>
    );
}

export default {FilaTabla};
export {FilaTabla};