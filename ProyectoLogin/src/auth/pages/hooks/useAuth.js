
import {loginReducer} from '../reducers/loginReducer.js';
import {loginAuth} from '../services/authService.js';
import {useReducer} from 'react';
import Swal from 'sweetalert2';

const initialLogin = JSON.parse(sessionStorage.getItem('login'))||{
    isAuth:false,
    user: undefined,
}

const useAuth=()=>{
    const[login,dispatch] = useReducer(loginReducer,initialLogin);

        const handlerLogin = ({username,password}) =>{
            if(loginAuth({username,password})){
                const user = {username:username}
                dispatch({
                    type:'login',
                    payload:user,
                })
                sessionStorage.setItem('login',JSON.stringify({
                    isAuth:true,
                    user,
                }));
            }else{
                Swal.fire('Error Login','Username o password invalidos','error');
            }
        }

        const handlerLogout = () =>{
            dispatch({
                type:'logout',
            });
            sessionStorage.removeItem('login');
        }

    return {login,handlerLogin,handlerLogout}
}

export{useAuth}