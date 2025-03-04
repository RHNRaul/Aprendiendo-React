import {useReducer,useState} from 'react';
import {usersReducer} from '../reducers/usersReducer.js';
import Swal from 'sweetalert2';


const initialUsers = []

const initialUserForm = {
    id:0,
    username:'',
    password:'',
    email:''
}

const useUsers=()=>{
    const [users,dispatch] = useReducer(usersReducer,initialUsers);
    const [userSelected,setUserSelected] = useState(initialUserForm);
    const [visibleForm,setVisibleForm] = useState(false);

    const handlerAddUser = (user)=>{
        dispatch({
            type:user.id === 0 ? 'addUser':'updateUser',
            payload: user
        });
        Swal.fire((user.id === 0)?'Usuario Creado':'Usuario Actualizado',(user.id === 0)?'El usuarios ha sido creado':'El usuario fue actualizado','success');
        handlerCloseForm();
    }

    const handlerRemoveUser = (id)=>{
        Swal.fire({
            title: "¿Quieres Eliminar?",
            showCancelButton: true,
            icon:'warning',
            confirmButtonText: "Eliminar",
            confirmButtonColor:'red',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Eliminado","Eliminaste el usuario", "success");
                dispatch({
                    type:'removeUser',
                    payload: id
                })
            } 
          });
    }
    const handlerUserSelectedForm =(user)=>{
        setUserSelected({...user});
        setVisibleForm(true);
    }

    const handlerOpenForm = () =>{
        setVisibleForm(true);
    }

    const handlerCloseForm = () =>{
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }

    return {users,userSelected,initialUserForm,visibleForm,handlerAddUser,handlerRemoveUser,handlerUserSelectedForm,handlerOpenForm,handlerCloseForm}
}

export {useUsers};