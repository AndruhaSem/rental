import React, { useState } from "react";
import navAuthAdmin from "./hoc/navAuthAdmin";
import navAuthJobs from "./hoc/navAuthJobs";
import navAuth from "./hoc/navAuth";
import NavBarIsUsersAdmin from "./hocNavBar/NavBarIsUsersAdmin";
import NavBarIsUsersJobs from "./hocNavBar/NavBarIsUsersJobs";
import NavBarIsUsers from "./hocNavBar/NavBarIsUsers";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData());
    console.log();
    const [isOpen, setOpen] = useState(false);
    function toggleMenu() {
        setOpen((prevState) => !prevState);
    }
    const ComponentNavHocAdmin = navAuthAdmin(NavBarIsUsersAdmin);
    const ComponentNavHocJobs = navAuthJobs(NavBarIsUsersJobs);
    const ComponentNavHocUser = navAuth(NavBarIsUsers);
    if (!currentUser) return "loading@";
    return (
        <>
            <div className="dropdown" onClick={toggleMenu}>
                <div className="btn dropdown-toggle d-flex align-items-center">
                    <div className="me-2">{currentUser.name}</div>
                    <img
                        src={currentUser.image}
                        alt=""
                        height="35"
                        className="img-responsive rounded-circle"
                    />
                </div>

                <ComponentNavHocAdmin isOpen={isOpen} />
                <ComponentNavHocJobs isOpen={isOpen} />
                <ComponentNavHocUser isOpen={isOpen} />
            </div>
        </>
    );
};

export default NavProfile;
