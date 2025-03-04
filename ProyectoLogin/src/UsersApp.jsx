import {LoginPage} from './auth/pages/LoginPage.jsx';
import {Navigate,Route,Routes} from 'react-router-dom'
import { UserRoutes } from './routes/UserRoutes.jsx';
import { AuthContext } from './auth/pages/context/AuthContext.jsx';
import { useContext } from 'react';



export const UsersApp = ()=>{

    const {login} = useContext(AuthContext);

    return(
    <>

        <Routes>
        {login.isAuth ?
       (<Route path='/*' element={<UserRoutes/>}/>)
       :
       <>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/*' element={<Navigate to='/login'/>}/>
       </>
        }
        </Routes>
    </>);
}