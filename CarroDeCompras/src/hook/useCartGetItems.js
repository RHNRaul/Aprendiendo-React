import { useState, useEffect} from "react";
import {productosGet} from '../data/productosConsulta.js'


const getItems = ()=>{
    const [productos,setProductos]=useState([]);
    const [loading,setLoading] = useState(false);

    async function buscarProductos(){
        try{
        setLoading(true);
        const productos = await productosGet();
        return productos;
        }catch(error){
        throw new Error(error);
        }
    }

    useEffect(()=>{
        buscarProductos().then((productosGet)=>{
            setLoading(false);
            setProductos([...productos,...productosGet]);
            }).catch((e)=>{
                setLoading(false);
                alert(e);
            });
    },[]);
    return {productos,loading};
};

export {getItems};