import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { userService } from "../../services/userService";
import usePersistedState from "../hooks/usePersistedSate";
import { validateRegister } from "../validateRegister";
import { errorParser } from "../errorParser";

const UserContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
    const [authErrors, setAuthErrors] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await userService.login(values.email, values.password);
        setAuth(result);
        localStorage.setItem('sessionToken', result.sessionToken);
        localStorage.setItem('objectId', result.objectId);
        navigate('/');
    };

    const registerSubmitHandler = async (values) => {
        try {
            validateRegister(values);
            const result = await userService.register(values.username, values.email, values.password);
            setAuth(result);
            localStorage.setItem('sessionToken', result.sessionToken);
            localStorage.setItem('objectId', result.objectId);
            navigate('/');

        } catch (error) {
            setAuthErrors(errorParser(error));
            navigate('/register');
        }
    };

    const updateUserHandler = async (values) => {
        await userService.updateUser(values);
        const result = await userService.getUser();
        setAuth(state => ({
            ...state,
            ...result
        }));
        return result;
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('objectId');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        updateUserHandler,
        username: auth.username,
        img: auth.img,
        email: auth.email,
        objectId: auth.objectId,
        isAuthenticated: !!auth.objectId,
        authErrors,
        setAuthErrors,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};

UserContext.displayName = 'UserContext';

export default UserContext;