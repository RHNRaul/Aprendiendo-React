import {useEffect,useReducer } from "react";
import {itemReducer} from '../Reducer/ItemReducer.js';

const preLoadCart = JSON.parse(sessionStorage.getItem('cart')) || [];
const useCartItemsHook = ()=>{
    const [cartItems,setCartItems] = useReducer(itemReducer,preLoadCart);

    useEffect(()=>{
        sessionStorage.setItem('cart',JSON.stringify(cartItems));
     },[cartItems]);

    const addItemCart = (articulo)=>{
        setCartItems({
            type:"add",
            item:articulo
        }
        );
    };
    const deleteItemCart = (articulo)=>{
        setCartItems({
            type:"delete",
            item:articulo
        }
        );
    } 


    return({cartItems,addItemCart,deleteItemCart});
}

export {useCartItemsHook};
