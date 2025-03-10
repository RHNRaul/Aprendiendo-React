import { UserContext } from "./UserContext";
import { useUsers } from "../hook/useUsers.js";

const UserProvider = ({ children }) => {

    const { users, userSelected, initialUserForm, visibleForm, handlerAddUser, handlerRemoveUser, handlerUserSelectedForm, handlerOpenForm, handlerCloseForm } = useUsers();

    return (
        <UserContext.Provider value={{
            users, userSelected, initialUserForm, visibleForm, handlerAddUser, handlerRemoveUser, handlerUserSelectedForm, handlerOpenForm, handlerCloseForm,
        }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider }