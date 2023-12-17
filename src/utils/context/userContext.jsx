import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { userService } from "../../services/userService";
import usePersistedState from "../hooks/usePersistedSate";

const UserContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await userService.login(values.email, values.password);

        setAuth(result);
        localStorage.setItem('sessionToken', result.sessionToken);
        localStorage.setItem('objectId', result.objectId);
        navigate('/');
    };

    const registerSubmitHandler = async (values) => {
        const result = await userService.register(values.username, values.email, values.password);

        setAuth(result);
        localStorage.setItem('sessionToken', result.sessionToken);
        localStorage.setItem('objectId', result.objectId);
        navigate('/');
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('objectId');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        img: auth.img,
        email: auth.email,
        objectId: auth.objectId,
        isAuthenticated: !!auth.objectId,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};

UserContext.displayName = 'UserContext';

export default UserContext;