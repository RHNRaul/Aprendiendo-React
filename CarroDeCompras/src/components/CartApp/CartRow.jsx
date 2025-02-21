import {useState} from 'react';

const CartRow = ({producto,agregar})=>{
    const { description, id, name, price } = producto;
    const [nombre,setNombre] = useState(name);
    const [descripcion,setDescripcion] = useState(description);
    const [precio,setPrecio] = useState(price);
    const [objetoProducto,setObjetoProducto] = useState({
        nombre:name,
        descripcion:description,
        precio:precio
    });
    const agregarProducto = ()=>{
        agregar(objetoProducto);
    }
return(
<div className ="card">
    <div className = "card-body">
        <h5 className = "card-title">{name}</h5>
        <p className = "card-text">{description}</p>
        <p className = "card-text">${price}</p>
        <button className="btn btn-primary" onClick={agregarProducto}>Agregar</button>
    </div>
</div>);
}
export {CartRow};