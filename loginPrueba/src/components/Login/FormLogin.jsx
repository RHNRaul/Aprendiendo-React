import { useContext } from 'react';
import style from '../../css/Login.module.css'
import { LoginContext } from '../../context/Login/LoginContext';
import { useState } from 'react';
import { CargandoContext } from '../../context/Cargando/CargandoContext';
import Swal from 'sweetalert2';

const FormularioLogin = () => {

    const { cambiarFormulario, iniciarformularioLogin,hacerLogin,colocarUsuarioLogeado } = useContext(LoginContext);
    const { mostrarCargando } = useContext(CargandoContext);
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [formulario, setFormulario] = useState(iniciarformularioLogin);
    const { useroremail, password } = formulario;

    const toggleMostrarPassword = () =>{
        setMostrarPassword(!mostrarPassword);
    }

    const manejoInformacionLogin = ({ target }) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [name]: value,
        });
    }

    const alEnviar = (event) => {
        event.preventDefault();
        mostrarCargando(true);
        if (!useroremail || !password) {
            mostrarCargando(false);
            Swal.fire("Login Error", "No haz llenado el formulario", 'error');
            return;
        }
        hacerLogin({
            identifier: useroremail,
            password: password
        })
        .then((respuesta)=>{
            colocarUsuarioLogeado(respuesta)
        })
        .catch((error)=>{
            Swal.fire("Login Error", error, 'error');
        })
        .finally(mostrarCargando(false));


    }

    return (
        <div className={style.contenedorIcono}>
            <div className={style.iconologin} />
            <div className={style.leyendalogin}>INICIO DE SESIÓN</div>
            <form className={style.formulariologin} onSubmit={alEnviar}>
                <label>Usuario o Correo</label>
                <input type="text" placeholder="Usuario/Correo" name="useroremail" value={useroremail} onChange={manejoInformacionLogin} />
                <label>Contraseña</label>
                <div className={style.inputContainerPassword}>
                    <input type={mostrarPassword ? "text" : "password"} className={style.formulariologin} placeholder="Contraseña" name="password" value={password} onChange={manejoInformacionLogin} />
                    <button type="button" onClick={toggleMostrarPassword} className={mostrarPassword ? `${style.botonVisualizar} ${style.iconoBotonVisualizarOpen}` : `${style.botonVisualizar} ${style.iconoBotonVisualizarClose}`}/>
                </div>
                <button className={style.formularioBotonAceptar} type='submit'>INGRESAR</button>
                <button className={style.formularioBotonDefault}>REINICIAR CONTRASEÑA</button>
                <div className={style.formulariologindiv}>¿No tienes cuenta?<label onClick={() => cambiarFormulario(false)}>Registrate</label></div>
            </form>
        </div>);
}

export { FormularioLogin };