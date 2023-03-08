import React from "react";
import { Link } from "react-router-dom";

const NavBarLk = () => {
    return (
        <>
            <Link className="active" to="/lk">
                <i className="bi bi-house"></i>Главная
            </Link>
            <Link to="/lk/details">
                <i className="bi bi-person"></i>Профиль
            </Link>
            <Link to="/rental">
                <i className="bi bi-clock"></i>Аренда
            </Link>
            <Link to="/statistic">
                <i className="bi bi-clipboard2-data"></i>Статистика
            </Link>
            <Link to="/money">
                <i className="bi bi-bank"></i>Деньги
            </Link>
        </>
    );
};

export default NavBarLk;
