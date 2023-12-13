import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/context/userContext";
import { userService } from "../../services/userService";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(UserContext);

    useEffect(() => {
        userService.logout().then(() => {
            logoutHandler();
            navigate('/');
        }).catch(() => {
            logoutHandler();
            navigate('/');
        })
    }, []);

    return null;
}