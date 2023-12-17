import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import UserContext from "../../utils/context/userContext";

export default function Nav() {
    const { isAuthenticated } = useContext(UserContext);
    const location = useLocation();

    const isActive = (path) => {
        if (path === location.pathname) {
            return 'nav-link active';
        }
        return 'nav-link';
    };

    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block sidebar collapse">
                <div className="position-sticky py-4 px-3 sidebar-sticky">
                    <ul className="nav flex-column h-100">

                        <li className="nav-item">
                            <Link className={isActive('/')} aria-current="page" to="/">
                                <i className="bi-house-fill me-2"></i>
                                Overview
                            </Link>
                        </li>

                        {!isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <Link className={isActive('/register')} to="/register">
                                        <i className="bi-box-arrow-up me-2"></i>
                                        Register
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={isActive('/login')} to="/login">
                                        <i className="bi-box-arrow-right me-2"></i>
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}

                        {isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <Link className={isActive('/profile')} to="/profile">
                                        <i className="bi-person me-2"></i>
                                        Profile
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={isActive('/statistic')} to="/statistic">
                                        <i className="bi-graph-up me-2"></i>
                                        Statistic
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={isActive('/wallet')} to="/wallet">
                                        <i className="bi-wallet me-2"></i>
                                        My Wallet
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={isActive('/transaction')} to="/transaction">
                                        <i className="bi-cash-coin me-2"></i>
                                        Add transaction
                                    </Link>
                                </li>

                                <li className="nav-item border-top mt-auto pt-2">
                                    <Link className="nav-link" to="/logout">
                                        <i className="bi-box-arrow-left me-2"></i>
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
};