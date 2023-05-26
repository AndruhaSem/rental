import React from "react";
import Table from "../common/table/table";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserTable({ statistic, onSort, selectedSort, onDelete }) {
    function addStartRental(time) {
        const date = new Date(Date.parse(time));
        return `${date.getDate()}.${
            date.getMonth() + 1
        }.${date.getFullYear()}/${date.getHours()}:${date.getMinutes()}`;
    }
    function addEndRental(time, timeRental) {
        const date = new Date(Date.parse(time) + timeRental * 60 * 60 * 1000);
        return `${date.getHours()}:${date.getMinutes()}`;
    }
    const columns = {
        id: {
            path: "id",
            name: "Номер заказа",
            component: (stat) => (
                <Link to={`/lk/statistic/${stat.id}`}>{stat.id}</Link>
            )
        },
        telephone: {
            name: "Телефон",
            component: (stat) => (stat.phone ? stat.phone : "Телефон не указан")
        },
        name: {
            name: "Фамилия.И.О",
            component: (stat) => stat.name
        },
        product: {
            path: "product",
            name: "Товар"
        },
        quantity: {
            path: "quantity",
            name: "колличество товара"
        },
        payment: {
            name: "Способ оплаты",
            component: (stat) =>
                stat.payment === "cash" ? "Наличка" : "Перевод"
        },
        deposit: {
            name: "Залог",
            component: (stat) =>
                stat.deposit_type ? stat.deposit_type : "Нет залога"
        },
        timeRental: {
            name: "Время аренды",
            component: (stat) => stat.time_rental
        },
        date: {
            name: "Начало аренды",
            component: (stat) => addStartRental(stat.createdAt)
        },
        newData: {
            name: "Время завершение",
            component: (stat) => addEndRental(stat.createdAt, stat.time_rental)
        },
        status: {
            component: (stat) => (
                <button
                    onClick={() => onDelete(stat.id)}
                    className="button-delete"
                >
                    delete
                </button>
            )
        }
    };
    return (
        <Table
            data={statistic}
            columns={columns}
            onSort={onSort}
            selectedSort={selectedSort}
        />
    );
}
UserTable.propTypes = {
    statistic: PropTypes.array.isRequired,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object.isRequired,
    onDelete: PropTypes.func
};
export default UserTable;
