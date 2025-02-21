import { Loading } from './Loading/Loading.jsx';
import { useCartItemsHook } from '../hook/userCartItems.js';
import { getItems } from '../hook/useCartGetItems.js';
import {Navbar} from './CartApp/NavBar.jsx'
import {Enrutador} from './Routes/Enrutador.jsx'

const CartApp = () => {
    const { cartItems, addItemCart, deleteItemCart } = useCartItemsHook();
    const { productos, loading } = getItems();

    return (<>
        <Loading loading={loading} />
        <Navbar/>
        <h3> Cart App</h3>
        <Enrutador productos={productos} cartItems={cartItems} addItemCart={addItemCart} deleteItemCart={deleteItemCart}/>
    </>);
}

export { CartApp };