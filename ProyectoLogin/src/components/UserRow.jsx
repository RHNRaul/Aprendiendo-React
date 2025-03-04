import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function UserRow ({id,username,email}){
    const {handlerRemoveUser,handlerUserSelectedForm} = useContext(UserContext);

    return(<tr>
        <td>
            {id}
        </td>
        <td>
            {username}
        </td>
        <td>
            {email}
        </td>
        <td>
            {<button type="button" className="btn btn-secondary btn-sm" text="update" onClick={()=>handlerUserSelectedForm({
                id:id,
                username,username,
                email,email,
            })}>Actualizar</button>}
        </td>
        <td>
            <NavLink className="btn btn-secondary btn-sm" to={'/users/edit/'+id}>Actualizar por Route</NavLink>
        </td>
        <td>
            {<button type="button" className="btn btn-danger btn-sm" text="update" onClick={()=>handlerRemoveUser(id)}>Eliminar</button>}
        </td>
    </tr>);
}

export {UserRow}