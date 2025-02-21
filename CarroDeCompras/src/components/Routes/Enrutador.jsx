import { Lista } from '../CartApp/CartList.jsx';
import { Routes, Route,Navigate } from 'react-router-dom';
import { CartCard } from '../CartApp/CartCat.jsx'

const Enrutador = ({ productos,cartItems, addItemCart, deleteItemCart})=>{
return(<Routes>
    <Route
        path="catalogo"
        element={
            <CartCard productos={productos} addItemCart={addItemCart} />
        }
    />
    <Route path="carrito" element={
        <div className="my-4 w-50">
            <Lista articulos={cartItems} eliminar={deleteItemCart} />
        </div>
    } />
    <Route path="/" element={<Navigate to={'/catalogo'}/>}/>
</Routes>);
}

export {Enrutador};