import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "../../../store/users";
import { NavLink } from "react-router-dom";

const ButtonPersonalArea = () => {
    const userId = useSelector(getCurrentUserId());
    return (
        <NavLink to={`/${userId}`}>
            <i className="bi bi-person-fill"></i>
        </NavLink>
    );
};

export default ButtonPersonalArea;
