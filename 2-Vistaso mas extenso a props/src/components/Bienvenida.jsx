import { LibroInfo } from './Libro';
import { Titulo } from './Titulo';


export const Bienvenida = (props)=>{
    return(<>
        <Titulo usuario={props.usuario}/>
        <LibroInfo libro={props.libro}/>
        </>);
};