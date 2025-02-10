
import PropTypes from 'prop-types';

function Ejemplo({ factura }) {
    const { name, fiscalNumber } = factura.company;
    return (
        <>
            <h3>Ejemplo</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    Id:{factura.id}
                </li>
                <li className="list-group-item">
                    nombre:{factura.name}
                </li>
                <li className="list-group-item">
                    compañia:{name}
                </li>
                <li className="list-group-item">
                    numero fiscal:{fiscalNumber}
                </li>
            </ul>
        </>);
}

Ejemplo.propTypes = {
    factura: PropTypes.object.isRequired,
}

const TablaEjemplo = ({ factura }) => {
    const { items } = factura
    return (<>
    <div className="container">
    <h3>Articulos</h3>
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <td>
                    Nombre
                </td>
                <td>
                    Precio
                </td>
                <td>
                    Cantidad
                </td>
            </tr>
        </thead>
        <tbody>
            {items.map((articulo, index) =>{
                return(<ItemRow cosa={articulo} key={articulo.id}></ItemRow>);
            }
            )}
        </tbody>
    </table></div></>);
}

const ItemRow =({cosa:{id,product,price,quantity}})=>{
return(<tr key={id}>
<td>
    {product}
</td>
<td>
    {price}
</td>
<td>
    {quantity}
</td>
</tr>);
}
export default { Ejemplo, TablaEjemplo };