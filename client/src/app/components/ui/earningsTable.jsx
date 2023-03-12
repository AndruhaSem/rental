import React from "react";
import { useSelector } from "react-redux";
import { getMoney, getMoneyLoadingStatus } from "../../store/money";
import { getUsersList } from "../../store/users";

const EarningsTable = () => {
    const money = useSelector(getMoney());
    const isLoggedIn = useSelector(getMoneyLoadingStatus());
    const currentUser = useSelector(getUsersList());
    const priceDay = 1000;
    const priceHourr = 500;
    const priceHalfDay = 1500;
    function generelZarobotok(mon) {
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
        return number;
    }
    function cashZarobotok(mon) {
        let number = 0;
        for (const priceHour in mon) {
            if (mon[priceHour].payment === "Наличные") {
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
        }
        return number;
    }
    function zarobotokTransfer(mon) {
        let number = 0;
        for (const priceHour in mon) {
            if (mon[priceHour].payment === "Перевод") {
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
        }
        return number;
    }
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
    if (!isLoggedIn) {
        return (
            <table>
                <tbody>
                    <tr>
                        <td className="float-l">Общий зароботок :</td>
                        <td className="float-r">{generelZarobotok(money)}</td>
                    </tr>
                    <tr>
                        <td className="float-l">Зароботок наличкой :</td>
                        <td className="float-r">{cashZarobotok(money)}</td>
                    </tr>
                    <tr>
                        <td className="float-l">Зароботок переводом : </td>
                        <td className="float-r">{zarobotokTransfer(money)}</td>
                    </tr>
                    <tr>
                        <td className="float-l">Личный зароботок : </td>
                        <td className="float-r">{personalZarobotok(money)}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
    return "LOD";
};
export default EarningsTable;
