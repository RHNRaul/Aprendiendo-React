import {useState,useEffect} from 'react';

const Lista = ({articulos,eliminar}) => {
    const [total,setTotal] = useState(0);

    useEffect(() => {
        const nuevoTotal = articulos.reduce((acc, a) => acc + a.total, 0);
        setTotal(nuevoTotal);
    }, [articulos]); // Se ejecuta solo cuando `articulos` cambia


    return (<table className="table table-hover table-striped">
        <thead>
            <tr>
                <th>
                    Producto
                </th>
                <th>
                    Precio
                </th>
                <th>
                    Cantidad
                </th>
                <th>
                    total
                </th>
                <th>
                    Eliminar
                </th>
            </tr>
        </thead>
        <tbody>
            {articulos.map((a,index) => {
                return(
                <tr key={index}>
                    <td>
                        {a.product.name}
                    </td>
                    <td>
                        {a.product.price}
                    </td>
                    <td>
                        {a.cantidad}
                    </td>
                    <td>
                        {a.total}
                    </td>
                    <td>
                        <button className="btn btn-secondary" onClick={()=>eliminar(a)}>Eliminar</button>
                    </td>
                </tr>);}
            )}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="3" className="text-start fw-bold">Total</td>
                <td colSpan="2" className="text-end fw-bold">${total}</td>
            </tr>
        </tfoot>
    </table>
    );
}
export { Lista };