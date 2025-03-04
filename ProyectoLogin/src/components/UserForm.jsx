import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../context/UserContext';

const UserForm = ({ userSelected,handlerCloseForm}) => {

    const {handlerAddUser, initialUserForm} = useContext(UserContext);

    const [userForm, setUserForm] = useState(initialUserForm);
    const { username, password, email, id } = userForm;

    const navigate = useNavigate();

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value
        })
    }
    useEffect(() => {
        setUserForm({ ...userSelected, password: '' });
    }, [userSelected]);
    const onSubmit = () => {
        event.preventDefault();
        if (!username || (!password && id === 0) || !email) {
            Swal.fire('Error de validacion', 'Debe completar los campos del formulario',
                'error');
            return;
        }
        if (!email.includes('@')) {
            Swal.fire('Error de validacion', 'El Email no es valido',
                'error');
            return;
        }
        handlerAddUser(userForm)
        setUserForm(initialUserForm);
        navigate("/users");
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }
    return (<form onSubmit={onSubmit}>
        <input onChange={onInputChange} value={username} className="form-control my-3 w-75" placeholder="Username" name="username" />
        {id !== 0 || <input onChange={onInputChange} value={password} className="form-control my-3 w-75" placeholder="Password" name="password" type="password" />}
        <input onChange={onInputChange} value={email} className="form-control my-3 w-75" placeholder="Email" name="email" />
        <input value={id} name="id" type="hidden" />

        <button className="btn btn-primary" type="submit">{id === 0 ? 'Crear' : 'Editar'}</button>
        <button className="btn btn-primary mx-2"
            type="button"
            onClick={() => onCloseForm()}>
            Cerrar
        </button>
    </form>);
}

export { UserForm }