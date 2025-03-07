import { useContext } from 'react';
import '../../css/Cargando/Cargando.css'
import { CargandoContext } from '../../context/Cargando/CargandoContext';



const Cargando =() => {
  const {cargando} = useContext(CargandoContext);
    return (
      cargando && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Cargando...</p>
        </div>
      )
    );
}

export {Cargando};