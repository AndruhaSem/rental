import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "../../../store/users";
import { Link } from "react-router-dom";

const ButtonPersonalArea = () => {
    const userId = useSelector(getCurrentUserId());
    return (
        <Link to={`/${userId}`}>
            <i className="bi bi-person-fill"></i>
        </Link>
    );
};

export default ButtonPersonalArea;
