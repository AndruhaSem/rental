import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavBarLk from "../components/ui/navBarLk";
import { getUsersList } from "../store/users";
import { useDarkMode } from "../hooks/useTheme";
import { Link } from "react-router-dom";
import ProductCount from "./ProductCount";

const PersonalArea = () => {
    const currentUser = useSelector(getUsersList());
    const [activ, setActiv] = useState(
        localStorage.getItem("app-theme") === "dark"
    );
    const { handleClickTheme } = useDarkMode();

    function handleDarkMode() {
        if (localStorage.getItem("app-theme") === "light") {
            handleClickTheme("dark");
            setActiv((prevState) => !prevState);
        } else {
            handleClickTheme("light");
            setActiv((prevState) => !prevState);
        }
    }

    return (
        <>
            <div className="Personal-area_nav">
                <NavBarLk />
            </div>
            <div className="container-personal_info">
                <div className="container-personal_width">
                    <div className="personal-info">
                        <div className="block-info_area">
                            <div className="background-image">
                                <img
                                    src={currentUser.image}
                                    alt="photo"
                                    height="60px"
                                />
                            </div>
                            <span className="personal-name">
                                {currentUser.name}
                            </span>
                        </div>
                        <ul>
                            <li>
                                <h3 className="title-personal">Email</h3>
                                <div className="info-client">
                                    <p>{currentUser.email}</p>
                                    <button>
                                        <i className="bi bi-pencil-fill"></i>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="personal-theme">
                        <h2>Тёмная тема</h2>
                        <input
                            type="checkbox"
                            className="personal-checkbox"
                            onChange={handleDarkMode}
                            checked={activ}
                        />
                    </div>
                    <Link to="/logout" className="logout">
                        <span className="exit">Выход</span>
                    </Link>
                    <div className="products_count">
                        <ProductCount />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalArea;
