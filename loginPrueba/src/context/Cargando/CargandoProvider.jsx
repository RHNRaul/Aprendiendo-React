import { useCargando } from "../../hooks/Cargando/useCargando";
import { CargandoContext } from "./CargandoContext";



const CargandoProvider = ({children})=>{

    const {cargando,mostrarCargando} = useCargando();
    return(<CargandoContext.Provider value={{
        cargando,
        mostrarCargando
    }}>
        {children}
    </CargandoContext.Provider>);
}

export {CargandoProvider}