import { Routes,Route,Navigate } from "react-router-dom";
import { PantallaLogin } from "../../components/Login/Pantalla";


const LoginRoutes = ()=>{
    return(
        <>
        <Routes>
            <Route path='/Inicio' element={<PantallaLogin/>}/>
            <Route path='/*' element={<Navigate to='/Inicio'/>}/>
        </Routes>
        </>
    );
}

export {LoginRoutes};