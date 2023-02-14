import React from "react";
import { Link } from "react-router-dom";
import NavProfile from "./navProfile";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return (
        <nav>
            <div className="header">
                <ul className="nav">
                    <li className="nav-item mr-hed">
                        <Link className="nav-link" to="/">
                            Главное
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reservations">
                            Бронирование
                        </Link>
                    </li>
                </ul>

                {isLoggedIn ? (
                    <NavProfile />
                ) : (
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
