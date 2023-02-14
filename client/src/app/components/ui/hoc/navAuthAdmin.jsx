import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../../store/users";

const navAuthAdmin = (Component) => (props) => {
    const currentUser = useSelector(getCurrentUserData());
    return <>{currentUser.isAdmin ? <Component {...props} /> : null}</>;
};

export default navAuthAdmin;
