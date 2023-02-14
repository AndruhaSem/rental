import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../../store/users";

const navAuthJobs = (Component) => (props) => {
    const currentUser = useSelector(getCurrentUserData());
    return <>{currentUser.isJobs ? <Component {...props} /> : null}</>;
};

export default navAuthJobs;
