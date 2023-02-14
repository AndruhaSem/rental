import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../../store/users";

const navAuth = (Component) => (props) => {
    const currentUser = useSelector(getCurrentUserData());
    return (
        <>
            {!currentUser.isAdmin && !currentUser.isJobs ? (
                <Component {...props} />
            ) : null}
        </>
    );
};

export default navAuth;
