import React from "react";
import { useSelector } from "react-redux";
import { getUsersList } from "../../../store/users";

const navAuth = (Component) => (props) => {
    const currentUser = useSelector(getUsersList());
    return (
        <>
            {!currentUser.isAdmin && !currentUser.isJobs ? (
                <Component {...props} />
            ) : null}
        </>
    );
};

export default navAuth;
