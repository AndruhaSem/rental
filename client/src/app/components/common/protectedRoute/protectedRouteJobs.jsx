import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../../store/users";

const ProtectedRouteJobs = ({ component: Component, children, ...rest }) => {
    const currentUser = useSelector(getCurrentUserData());
    return (
        <Route
            {...rest}
            render={(props) => {
                if (
                    !currentUser ||
                    (!currentUser.isJobs && !currentUser.isAdmin)
                ) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
                return Component ? <Component {...props} /> : children;
            }}
        />
    );
};
ProtectedRouteJobs.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ProtectedRouteJobs;
