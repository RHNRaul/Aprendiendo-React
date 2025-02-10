import { ObtenerFacturas } from '../services/obtFacturas.js';
import MuestraEjemplo from './MuestraEjemplo.jsx';

const Principal = () => {
    const factura = ObtenerFacturas();
    return (
        <>
            <div className="container">
            <div className="card">
                <div className="card-header">
                    Factura
                </div>
                <div className="card-body">
                        <MuestraEjemplo.Ejemplo factura={factura} />
                    <MuestraEjemplo.TablaEjemplo factura={factura} />
                </div>
            </div>
            </div>
        </>
    );
}



export default { Principal };
export { Principal }