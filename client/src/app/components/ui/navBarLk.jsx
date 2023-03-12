import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUsersList } from "../../store/users";

const NavBarLk = () => {
    const currentUSer = useSelector(getUsersList());
    return (
        <>
            <NavLink exact to="/lk">
                <i className="bi bi-house"></i>Главная
            </NavLink>
            <NavLink to="/lk/details">
                <i className="bi bi-person"></i>Профиль
            </NavLink>
            {currentUSer.isAdmin || currentUSer.isJobs ? (
                <NavLink to="/lk/rental">
                    <i className="bi bi-clock"></i>Аренда
                </NavLink>
            ) : null}

            {currentUSer.isAdmin ? (
                <NavLink to="/lk/statistic">
                    <i className="bi bi-clipboard2-data"></i>Статистика
                </NavLink>
            ) : null}
            {currentUSer.isAdmin ? (
                <NavLink to="/lk/money">
                    <i className="bi bi-bank"></i>Деньги
                </NavLink>
            ) : null}
        </>
    );
};

export default NavBarLk;
