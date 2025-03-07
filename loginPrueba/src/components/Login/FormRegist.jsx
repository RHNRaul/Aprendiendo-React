import { useContext, useState } from 'react';
import style from '../../css/Login.module.css'
import { LoginContext } from '../../context/Login/LoginContext';
import { CargandoContext } from '../../context/Cargando/CargandoContext';
import Swal from 'sweetalert2';
import zxcvbn from 'zxcvbn';


const FormularioRegistro = () => {
    const { cambiarFormulario, hacerRegistro, iniciarformularioRegistrar } = useContext(LoginContext);
    const { mostrarCargando } = useContext(CargandoContext);
    const [formulario, setFormulario] = useState(iniciarformularioRegistrar);
    const [passwordFuerza, setPasswordFuerza] = useState('BAJA');
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [mostrarPasswordConfirm, setMostrarPasswordConfirm] = useState(false);
    const { username, email, password, passwordconfirm } = formulario;




    const manejoInformacionRegistro = ({ target }) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [name]: value,
        });

        if (name === 'password') {
            const evaluation = zxcvbn(value);
            if (evaluation.score < 2) {
                setPasswordFuerza('BAJA');
            } else if (evaluation.score < 4) {
                setPasswordFuerza('MEDIA');
            } else {
                setPasswordFuerza('BUENA');
            }
        }
    }


    const alEnviar = (event) => {
        event.preventDefault();
        mostrarCargando(true);
        if (!username || !email || !password || !passwordconfirm) {
            Swal.fire("Registro Error", 'No haz llenado el formulario', 'error');
            mostrarCargando(false);
            return;
        }
        if (!email.includes('@')) {
            Swal.fire("Registro Error", 'No haz ingresado un correo valido', 'error');
            mostrarCargando(false);
            return;
        }
        if(passwordFuerza === 'BAJA' || passwordFuerza === 'MEDIA'){
            Swal.fire("Registro Error", 'La contraseña no es segura', 'error');
            mostrarCargando(false);
            return
        }

        if (!(password === passwordconfirm)) {
            Swal.fire("Registro Error", 'Las contraseñas no coinciden', 'error');
            mostrarCargando(false);
            return;
        }
        hacerRegistro(
            {
                username: username,
                email: email,
                password: password
            })
            .then(() => {
                Swal.fire('Registro', 'Registro Exitoso', 'success')
                setFormulario(iniciarformularioRegistrar);
                cambiarFormulario(true);
            })
            .catch((error) => {
                Swal.fire("Registro Error", error.message, 'error');
            })
            .finally(() => mostrarCargando(false)); // ✅ Ahora `finally` ejecuta la función correctamente
    }

    const toggleMostrarPassword = () =>{
        setMostrarPassword(!mostrarPassword);
    }

    
    const toggleMostrarPasswordConfirm = () =>{
        setMostrarPasswordConfirm(!mostrarPasswordConfirm);
    }

    return (
        <div className={style.contenedorIcono}>
            <div className={style.iconologin} />
            <div className={style.leyendalogin}>REGISTRARSE</div>
            <form className={style.formulariologin} onSubmit={alEnviar}>
                <label>Usuario</label>
                <input type="text" placeholder="Usuario" name="username" value={username} onChange={manejoInformacionRegistro} />
                <label>Correo</label>
                <input type="text" placeholder="Correo" name="email" value={email} onChange={manejoInformacionRegistro} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <label>Contraseña</label>
                    <small className={`${style.passwordstrengthbar} ${style[passwordFuerza]}`}>{passwordFuerza}</small>
                </div>
                <div className={style.inputContainerPassword}>
                    <input type={mostrarPassword ? "text" : "password"} className={style.formulariologin} placeholder="Contraseña" name="password" value={password} onChange={manejoInformacionRegistro}/>
                    <button type="button" onClick={toggleMostrarPassword} className={mostrarPassword?`${style.botonVisualizar} ${style.iconoBotonVisualizarOpen}`:`${style.botonVisualizar} ${style.iconoBotonVisualizarClose}`}/>
                </div>                
                <label>Confirmar contraseña</label>
                <div className={style.inputContainerPassword}>
                    <input type={mostrarPasswordConfirm ? "text" : "password"} className={style.formulariologin} placeholder="Repite contraseña" name="passwordconfirm" value={passwordconfirm} onChange={manejoInformacionRegistro} />
                    <button type="button" onClick={toggleMostrarPasswordConfirm} className={mostrarPasswordConfirm?`${style.botonVisualizar} ${style.iconoBotonVisualizarOpen}`:`${style.botonVisualizar} ${style.iconoBotonVisualizarClose}`}/>
                </div>                       
                <button className={style.formularioBotonAceptar} type='submit'>Registrarse</button>
                <div className={style.formulariologindiv}>¿Ya tienes una cuenta?<label onClick={() => cambiarFormulario(true)}>Iniciar</label></div>
            </form>
        </div>);
}

export { FormularioRegistro };