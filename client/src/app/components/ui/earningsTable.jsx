import React from "react";
import { useSelector } from "react-redux";
import { getMoney, getMoneyLoadingStatus } from "../../store/money";

const EarningsTable = () => {
    const money = useSelector(getMoney());
    const isLoggedIn = useSelector(getMoneyLoadingStatus());
    if (!isLoggedIn) {
        return (
            <table>
                <tbody>
                    <tr>
                        <td className="float-l">Общий зароботок :</td>
                        <td className="float-r">{money.total}</td>
                    </tr>
                    <tr>
                        <td className="float-l">Зароботок наличкой :</td>
                        <td className="float-r">{money.cash_total}</td>
                    </tr>
                    <tr>
                        <td className="float-l">Зароботок переводом : </td>
                        <td className="float-r">{money.card_total}</td>
                    </tr>
                    <tr>
                        <td className="float-l">Личный зарaбoток : </td>
                        <td className="float-r">{money.user_total}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
    return "loading...";
};
export default EarningsTable;
