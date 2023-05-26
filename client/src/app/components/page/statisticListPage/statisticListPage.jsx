import React, { useEffect, useState } from "react";
import UserTable from "../../ui/userTable";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import _ from "lodash";
import PropTypes from "prop-types";
import NavBarLk from "../../ui/navBarLk";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteOrder,
    getStatistics,
    getOrdersLoadingStatus,
    loadOrdersList
} from "../../../store/orders";

function StatisticListPage() {
    const [currentPage, setCurrenPage] = useState(1);
    const pageSize = 10;
    const dispatch = useDispatch();
    const statistics = useSelector(getStatistics());
    const isLoading = useSelector(getOrdersLoadingStatus());
    const [sortBy, setSortBy] = useState({ path: "id", order: "asc" });

    useEffect(() => {
        dispatch(loadOrdersList());
    }, []);
    function handleSort(item) {
        setSortBy(item);
    }
    const handlePageChange = (pageIndex) => {
        setCurrenPage(pageIndex);
    };

    function handleDelete(userId) {
        dispatch(deleteOrder(userId));
    }

    const sortedStatistic = _.orderBy(
        statistics,
        [sortBy.path],
        [sortBy.order]
    );
    const statisticCrop = paginate(sortedStatistic, currentPage, pageSize);

    useEffect(() => {
        if (statisticCrop.length === 0) {
            setCurrenPage((prevState) => prevState - 1);
        }
    }, [statisticCrop.length]);
    if (!isLoading && statistics) {
        const count = statistics.length;
        return (
            <>
                <div className="Personal-area_nav">
                    <NavBarLk />
                </div>
                <div className="block-informationn">
                    <div className="block-information">
                        {count > 0 && (
                            <UserTable
                                statistic={statisticCrop}
                                onSort={handleSort}
                                selectedSort={sortBy}
                                onDelete={handleDelete}
                            />
                        )}
                    </div>
                    <div className="flex-pagination">
                        <Pagination
                            itemCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </>
        );
    }
    return <h2 className="loading">Loading....</h2>;
}
StatisticListPage.propTypes = {
    statistic: PropTypes.array
};
export default StatisticListPage;
