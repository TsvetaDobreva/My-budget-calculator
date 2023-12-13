import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../../utils/context/userContext";


export default function AuthGuard(props) {
    const { isAuthenticated } = useContext(UserContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}