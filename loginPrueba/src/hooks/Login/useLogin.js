
import {useEffect, useState} from "react";
import { Registro,Login } from "../../data/AuthLogin";

const useLogin = ()=>{

  const iniciarformularioRegistrar={
    username:'',
    email:'',
    password:'',
    passwordconfirm:''
  }

  
    const iniciarformularioLogin={
    useroremail:'',
    password:''
    }


    const iniciarUsuario = {
      user:{},
      token:"",
      isAuth:false
    }



    const [frmLogin,setFrmLogin] = useState(true);

    const[user,setUser] = useState(localStorage.getItem('usuario')?JSON.parse(localStorage.getItem('usuario')):iniciarUsuario);

    function cambiarFormulario(cambio){
            setFrmLogin(cambio);
    }

    useEffect(()=>{
       const fecha = localStorage.getItem('fecha')?new Date(localStorage.getItem('fecha')):undefined;
       if(fecha===undefined){
         return;
       }
       const fechaActual = new Date();
       const diferencia = Math.abs(fechaActual - fecha) / 36e5;
       if(diferencia>=1){
         localStorage.removeItem('usuario');
         localStorage.removeItem('fecha');
         localStorage.clear();
         setUser(iniciarUsuario);
       }
    },[]);

    const colocarUsuarioLogeado = (usuario) =>{
      localStorage.setItem('usuario',JSON.stringify(usuario));
      colocarFecha();
      setUser(usuario);
    }

    function colocarFecha(){
      const fecha = new Date();
      localStorage.setItem('fecha',fecha);
    }

    const hacerRegistro=async(regobj)=>{
        try{
          const respuesta = await Registro(regobj);
        }catch(exception){
          console.log('Error capturado:', exception);
          throw new Error(exception);
        }
    }

    const hacerLogin=async(logobj)=>{
      try{
        const token = await Login(logobj);
        return parseJwt(token);
      }catch(exception){
        console.log('Error capturado:', exception);
        throw new Error(exception);
      }
  }

  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const decodedData = JSON.parse(jsonPayload);
    return {usuario:decodedData.sub, token: token,isAuth:true};
  }

  function obtenerIdDeToken(token){
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const decodedData = JSON.parse(jsonPayload);
    return {id:decodedData.id};
  }
    return{frmLogin,cambiarFormulario,hacerRegistro,hacerLogin,iniciarformularioRegistrar,iniciarformularioLogin,user,colocarUsuarioLogeado};
}

export {useLogin};