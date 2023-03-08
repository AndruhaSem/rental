import React from "react";
import NavBarLk from "../../ui/navBarLk";
import { Link } from "react-router-dom";

// import { useDarkMode } from "../../../hooks/useTheme";

const UserPage = () => {
    // const [activ, setActiv] = useState(
    //     localStorage.getItem("app-theme") === "dark"
    // );
    // const { handleClickTheme } = useDarkMode();

    // function handleDarkMode() {
    //     if (localStorage.getItem("app-theme") === "light") {
    //         handleClickTheme("dark");
    //         setActiv((prevState) => !prevState);
    //     } else {
    //         handleClickTheme("light");
    //         setActiv((prevState) => !prevState);
    //     }
    // }

    return (
        <>
            {/* <div className="rental-choice-page">
                <label className="label">Тема</label>
                <div className="form-container-rental">
                    <div className="form-check-rental">
                        <input
                            className="form-check-input-rental"
                            type="checkbox"
                            value=""
                            onChange={handleDarkMode}
                            checked={activ}
                        />
                        <label className="form-check-label-rental">
                            Тёмная тема
                        </label>
                    </div>
                </div>
            </div> */}
            <div className="Personal-area">
                <div className="Personal-area_nav">
                    <NavBarLk />
                </div>
                <div className="Personal-area_content">
                    <Link to="/lk/details" className="div1 lo">
                        Профиль
                    </Link>
                    <Link to="/rental" className="div2 lo">
                        Аренда
                    </Link>
                    <Link to="/statistic" className="div3 lo">
                        Статистика
                    </Link>
                    <Link to="/money" className="div4 lo">
                        Деньги
                    </Link>
                    <Link to="/logout" className="div4 lo">
                        Врем Выход
                    </Link>
                </div>
            </div>
        </>
    );
};

export default UserPage;
