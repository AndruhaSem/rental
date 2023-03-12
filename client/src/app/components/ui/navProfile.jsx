import React from "react";

import { useSelector } from "react-redux";
import { getUsersList } from "../../store/users";
import { Link } from "react-router-dom";

const NavProfile = () => {
    const currentUser = useSelector(getUsersList());
    if (!currentUser) return "loading@";
    return (
        <>
            <Link className="dropdown" to="/lk">
                <div className="btn dropdown-toggle d-flex align-items-center">
                    <div className="me-2">{currentUser.name}</div>
                    <i className="bi bi-person-fill"></i>
                </div>
            </Link>
        </>
    );
};

export default NavProfile;
