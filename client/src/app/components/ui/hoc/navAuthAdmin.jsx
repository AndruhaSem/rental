import React from "react";
import { useSelector } from "react-redux";
import { getUsersList } from "../../../store/users";

const navAuthAdmin = (Component) => (props) => {
    const currentUser = useSelector(getUsersList());
    return <>{currentUser.isAdmin ? <Component {...props} /> : null}</>;
};

export default navAuthAdmin;
