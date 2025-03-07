import { useState } from "react";


const useCargando = ()=>{
    const [cargando,setCargando] = useState(false);

    const mostrarCargando = (status)=>{
        setCargando(status);
    }
    return {cargando,mostrarCargando};
}

export {useCargando}