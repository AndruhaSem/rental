import React from "react";
import { useParams } from "react-router-dom";
import StatisticListPage from "../components/page/statisticListPage/statisticListPage";
import StatisticPage from "../components/page/statisticPage/statisticPage";

const Statistis = () => {
    const params = useParams();
    const { statisticId } = params;
    return <>{statisticId ? <StatisticPage /> : <StatisticListPage />}</>;
};

export default Statistis;
