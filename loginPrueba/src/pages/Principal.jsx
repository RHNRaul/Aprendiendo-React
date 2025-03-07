import { useContext } from "react";
import { LoginRoutes } from "../Routes/Login/LoginRoutes";
import {useState} from 'react';
import { LoginContext } from "../context/Login/LoginContext";

const Principal = ()=>{

    const {user} = useContext(LoginContext);

    return(<>
    <div style={{ backgroundColor: 'white' }}>
    {!user.isAuth?<LoginRoutes/>:<><div><h3>Bienvenido</h3></div></>}
    </div>
    </>);



}

export {Principal};