import {Tarjeta} from './Tarjeta.jsx';
import style from '../../css/Login.module.css'


const PantallaLogin = () =>{
    return(<>
        <div className={style.fondo}>
        <div className={style.contenedor}>
        <Tarjeta/>
        </div>
        <div className={style.leyenda}>
            Mi leyenda en la esquina inferior derecha.
        </div>
        </div>
        </>);
}

export {PantallaLogin};