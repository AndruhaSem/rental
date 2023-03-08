import React from "react";
import { useSelector } from "react-redux";
import { getUsersList } from "../../../store/users";

const navAuthJobs = (Component) => (props) => {
    const currentUser = useSelector(getUsersList());
    return <>{currentUser.isJobs ? <Component {...props} /> : null}</>;
};

export default navAuthJobs;
