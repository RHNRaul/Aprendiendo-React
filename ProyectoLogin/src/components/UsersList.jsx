import { useContext } from 'react';
import {UserRow} from './UserRow.jsx';
import { UserContext } from '../context/UserContext.jsx';
const UsersList = ({users=[]}) => {
    return(<>
        <p>Listado de Usuarios</p>
        <table className="table table-hover table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>username</th>
                <th>email</th>
                <th>update</th>
                <th>update route</th>
                <th>remove</th>
            </tr>
            </thead>
            <tbody>
                {users.map(({id,username,email})=>
                   <UserRow key={id} id={id} username={username} email={email}/>
                )
                }
            </tbody>
        </table>
        </>);
}

export {UsersList}