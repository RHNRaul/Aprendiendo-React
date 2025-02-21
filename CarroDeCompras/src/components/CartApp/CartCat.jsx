import {CartView} from './CartView.jsx';

const CartCard = ({productos,addItemCart})=>{

    return(
    <div className="row">
        {productos.map((producto, index) => (
            <CartView key={index} product={producto} add={addItemCart} />
        ))}
    </div>
    );
}

export {CartCard};