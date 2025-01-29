import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BotonPrueba} from './botonera.jsx'

const principaldiv = document.getElementById('root');
const arbolprimario = createRoot(principaldiv);

const Boton = ({text}) => {
return(<button>{text}</button>);
}
const CajitaBotones = ()=>{
 return(<>
<BotonPrueba></BotonPrueba>
  </>);
}
arbolprimario.render(<StrictMode>
<CajitaBotones></CajitaBotones>
</StrictMode>);

