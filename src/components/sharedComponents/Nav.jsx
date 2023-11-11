import { Link, Outlet } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block sidebar collapse">
                <div className="position-sticky py-4 px-3 sidebar-sticky">
                    <ul className="nav flex-column h-100">

                        <li className="nav-item">
                            <Link className="nav-link" to="/register">
                                <i className="bi-box-arrow-up me-2"></i>
                                Register
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                <i className="bi-box-arrow-right me-2"></i>
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                <i className="bi-house-fill me-2"></i>
                                Overview
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">
                                <i className="bi-person me-2"></i>
                                Profile
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/statistic">
                                <i className="bi-graph-up me-2"></i>
                                Statistic
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/wallet">
                                <i className="bi-wallet me-2"></i>
                                My Wallet
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="/transaction">
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
                    </ul>
                </div>
            </nav>

            <Outlet />

        </>
    )
}