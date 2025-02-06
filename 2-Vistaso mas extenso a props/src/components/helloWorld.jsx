import PropTypes from 'prop-types';


export function HelloWorld(){
    return (<div><h1>Hola Mundo</h1></div>);
}

export function HelloWorld2(){
    return (<><h1>Hello World</h1></>);
}
const miNombre = 'Raul';

export function EjemploNombre(){
   return(<>
        <h1>
            {miNombre}
        </h1>
    </>);
}

export function EjemploNombreProps(propiedades){
    return(<>
        <h1>
            {propiedades.usuario}
        </h1>
    </>);
}

export const Jugador = ({nombre='Christiano ronaldo',numero=10})=>{
    return(<>
        <h1>
        Hola Jugador {nombre} con el numero de camiseta {numero}
        </h1>
        </>);
}

export const MostrarUsuario = (usuario)=>{
    return(<><h1>Hola {usuario.user?.nombre}</h1></>)
}

Jugador.propTypes = {
    nombre: PropTypes.string, // `nombre` debe ser una cadena y es obligatorio
    numero: PropTypes.string.isRequired  // `numero` debe ser un número y es obligatorio
};
