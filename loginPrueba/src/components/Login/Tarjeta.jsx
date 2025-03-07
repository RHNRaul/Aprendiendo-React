import {useContext, useState} from 'react';
import {FormularioLogin} from './FormLogin.jsx';
import {FormularioRegistro} from './FormRegist.jsx';

import style from '../../css/Login.module.css'
import { LoginContext } from '../../context/Login/LoginContext.jsx';

const Tarjeta = ()=>{

    const {frmLogin} = useContext(LoginContext);

    return(
    <div className={style.tarjeta}>
        <div className={style.imagenlogin}/>
        <div className={style.preformulario}>
        {frmLogin?<FormularioLogin/>:<FormularioRegistro/>}
        </div>
    </div>);
}

export {Tarjeta};