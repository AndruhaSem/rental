import React, { useState } from "react";

import { useDarkMode } from "../../../hooks/useTheme";

const UserPage = () => {
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
            <div className="rental-choice-page">
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
            </div>
        </>
    );
};

export default UserPage;
