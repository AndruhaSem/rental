import React, { useState, useEffect, useContext } from "react";
import moneyService from "../services/money.statistics";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const MoneyContext = React.createContext();

export const useMoney = () => {
    return useContext(MoneyContext);
};
export const MoneyProvider = ({ children }) => {
    const [money, setMoney] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMoney();
    }, []);
    async function getMoney() {
        try {
            const { content } = await moneyService.get();
            setMoney(content);
        } catch (error) {
            errorCatcher(error);
        }
    }

    async function createMoney({
        кentalСhoice,
        quantity,
        timeRental,
        payment
    }) {
        const stat = {
            id: nanoid(),
            кentalСhoice,
            quantity,
            timeRental,
            payment
        };
        try {
            const { content } = await moneyService.create(stat);
            setMoney((prevState) => [...prevState, content]);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    useEffect(() => {
        if (error !== null) {
            //   toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <MoneyContext.Provider
            value={{
                money,
                createMoney
            }}
        >
            {children}
        </MoneyContext.Provider>
    );
};

MoneyProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
