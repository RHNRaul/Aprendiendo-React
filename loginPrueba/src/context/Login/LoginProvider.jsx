import { useLogin } from "../../hooks/Login/useLogin";
import { LoginContext } from "./LoginContext";


const LoginProvider = ({children})=>{


    const {frmLogin,cambiarFormulario,hacerRegistro,hacerLogin,iniciarformularioRegistrar,iniciarformularioLogin,user,colocarUsuarioLogeado} = useLogin();
    return(<LoginContext.Provider value={{
        frmLogin,
        cambiarFormulario,
        hacerRegistro,
        hacerLogin,
        iniciarformularioRegistrar,
        iniciarformularioLogin,
        user,
        colocarUsuarioLogeado
    }}>
        {children}
    </LoginContext.Provider>);
}

export {LoginProvider}