import React, { useEffect } from "react";
import NavBarLk from "../../ui/navBarLk";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsersList } from "../../../store/users";
import { getMoney, loadmoneyList } from "../../../store/money";

const UserPage = () => {
    const priceDay = 1000;
    const priceHourr = 500;
    const priceHalfDay = 1500;
    const currentUser = useSelector(getUsersList());
    const money = useSelector(getMoney());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadmoneyList());
    }, []);

    function personalZarobotok(mon) {
        let number = 0;

        for (const priceHour in mon) {
            if (mon[priceHour].timeRental === 12) {
                number += mon[priceHour].quantity * priceHalfDay;
            } else if (mon[priceHour].timeRental === 24) {
                number += mon[priceHour].quantity * priceDay;
            } else {
                number +=
                    mon[priceHour].quantity *
                    mon[priceHour].timeRental *
                    priceHourr *
                    2;
            }
        }

        return (
            (number / 100) *
            ((Number(currentUser.fraction) * 100) / 6).toFixed(0)
        );
    }

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
                    {currentUser.isAdmin || currentUser.isJobs ? (
                        <Link to="/lk/rental" className="div2 lo">
                            Аренда
                        </Link>
                    ) : null}
                    {currentUser.isAdmin ? (
                        <Link to="/lk/statistic" className="div3 lo">
                            Статистика
                        </Link>
                    ) : null}
                    {currentUser.isAdmin ? (
                        <Link to="/lk/money" className="div4 lo">
                            <div className="money-container">
                                <p className="money-text">Финансы:</p>
                                <div className="money">
                                    {personalZarobotok(money) + " ₽"}
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
