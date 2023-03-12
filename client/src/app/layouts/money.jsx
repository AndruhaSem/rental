import React, { useEffect } from "react";
import EarningsTable from "../components/ui/earningsTable";
import NavBarLk from "../components/ui/navBarLk";
import { useDispatch } from "react-redux";
import { loadmoneyList } from "../store/money";

const Money = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadmoneyList());
    }, []);
    return (
        <>
            <div className="Personal-area_nav">
                <NavBarLk />
            </div>
            <div className="admin-stat-money">
                <EarningsTable />
            </div>
        </>
    );
};

export default Money;
