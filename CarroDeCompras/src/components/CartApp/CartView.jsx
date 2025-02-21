import {CartRow} from './CartRow.jsx';

const CartView = ({product,add})=>{
    return(
    <div className="col-4 my-2">
        <CartRow producto = {product} agregar={add}/>
    </div>
    );
}
export {CartView};