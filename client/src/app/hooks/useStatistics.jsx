import React, { useState, useEffect, useContext } from "react";
import statisticService from "../services/statistics.service";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const StatisticsContext = React.createContext();

export const useStatistics = () => {
    return useContext(StatisticsContext);
};
export const StatisticsProvider = ({ children }) => {
    const [statistic, setStatistics] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getStatistics();
    }, []);

    async function getStatistics() {
        try {
            const { content } = await statisticService.getStatistics();
            setStatistics(content);
        } catch (error) {
            errorCatcher(error);
        } finally {
            setLoading(false);
        }
    }

    async function createStatustic(data) {
        const stat = {
            id: nanoid(),
            date: Date.now(),
            ...data
        };
        try {
            const { content } = await statisticService.createStatistics(stat);
            setStatistics((prevState) => [...prevState, content]);
        } catch (error) {
            errorCatcher(error);
        }
    }
    async function removeStatistic(id) {
        try {
            const { content } = await statisticService.removeStatistics(id);
            if (content === null) {
                setStatistics((prevState) =>
                    prevState.filter((c) => c.id !== id)
                );
            }
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
        <StatisticsContext.Provider
            value={{
                statistic,
                isLoading,
                createStatustic,
                removeStatistic
            }}
        >
            {children}
        </StatisticsContext.Provider>
    );
};

StatisticsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
