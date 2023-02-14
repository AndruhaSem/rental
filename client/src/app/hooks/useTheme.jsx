import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

export const useDarkMode = () => {
    return useContext(ThemeContext);
};
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("app-theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("app-theme", theme);
    }, [theme]);
    function handleClickTheme(item) {
        setTheme(item);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                handleClickTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
