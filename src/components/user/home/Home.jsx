import { useContext } from "react"
import UserContext from "../../../utils/context/userContext";
import UserHome from "./userHome/UserHome";
import GuestHome from "./guestHome/GuestHome";

export default function Home() {
    const { isAuthenticated } = useContext(UserContext);

    return (
        <>
            { !isAuthenticated ? < GuestHome /> : < UserHome /> }
        </>
    );
};