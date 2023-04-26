import React, { useEffect } from "react";
import NavBarLk from "../../ui/navBarLk";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsersList } from "../../../store/users";
import { getMoney, loadmoneyList } from "../../../store/money";

const UserPage = () => {
    const currentUser = useSelector(getUsersList());
    const money = useSelector(getMoney());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadmoneyList());
    }, []);

    return (
        <>
            <div className="Personal-area">
                <div className="Personal-area_nav">
                    <NavBarLk />
                </div>
                <div className="Personal-area_content">
                    <Link to="/lk/details" className="div1 lo">
                        Профиль
                    </Link>
                    {currentUser.is_admin || currentUser.isJobs ? (
                        <Link to="/lk/rental" className="div2 lo">
                            Аренда
                        </Link>
                    ) : null}
                    {currentUser.is_admin ? (
                        <Link to="/lk/statistic" className="div3 lo">
                            Статистика
                        </Link>
                    ) : null}
                    {currentUser.is_admin ? (
                        <Link to="/lk/money" className="div4 lo">
                            <div className="money-container">
                                <p className="money-text">Финансы:</p>
                                <div className="money">
                                    {money.total + " ₽"}
                                </div>
                            </div>
                        </Link>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default UserPage;
