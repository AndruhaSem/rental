import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";
import ButtonPersonalArea from "../common/table/buttonPersonalArea";

const NavMobile = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return (
        <div className="nav-mobile hide-desktop">
            <NavLink exact to="/">
                <i className="bi bi-house-fill"></i>
            </NavLink>

            <NavLink to="/reservations">
                <i className="bi bi-clipboard2-minus-fill"></i>
            </NavLink>

            {isLoggedIn ? (
                <ButtonPersonalArea />
            ) : (
                <NavLink to="/login">
                    <i className="bi bi-person-fill"></i>
                </NavLink>
            )}
        </div>
    );
};

export default NavMobile;
