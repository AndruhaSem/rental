import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";
import ButtonPersonalArea from "../common/table/buttonPersonalArea";

const NavMobile = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    // const userId = useSelector(getCurrentUserId());

    return (
        <div className="nav-mobile hide-desktop">
            <Link to="/">
                <i className="bi bi-house-fill"></i>
            </Link>

            <Link to="/reservations">
                <i className="bi bi-clipboard2-minus-fill"></i>
            </Link>

            {isLoggedIn ? (
                <ButtonPersonalArea />
            ) : (
                <Link to="/login">
                    <i className="bi bi-person-fill"></i>
                </Link>
            )}
        </div>
    );
};

export default NavMobile;
