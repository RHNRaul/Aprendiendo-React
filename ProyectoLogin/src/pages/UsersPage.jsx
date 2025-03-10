import {UsersList} from '../components/UsersList.jsx';
import {UserModalForm} from '../components/UserModalForm.jsx';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';


export const UsersPage = ()=>{
    const {users,visibleForm} = useContext(UserContext);
    
    return(
    <>
    {!visibleForm||<UserModalForm/>}
    <div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
            <div className="col">
            {visibleForm||<button className="btn btn-primary my-2"
            type="button"
            onClick={handlerOpenForm}>
                Nuevo Usuario
            </button>}                    
            {users.length === 0 ? <div className="alert alert-warning">Sin usuarios en el sistema</div>:
            <UsersList users={users}/>
            }
            </div>
        </div>

    </div>
    </>);
}