import React from "react";
import Table from "../common/table/table";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserTable({ statistic, onSort, selectedSort, onDelete }) {
    function addStartRental(time) {
        const date = new Date(time);
        return `${date.getDate()}.${
            date.getMonth() + 1
        }.${date.getFullYear()}/${date.getHours()}:${date.getMinutes()}`;
    }
    function addEndRental(time, timeRental) {
        const date = new Date(time + timeRental * 60 * 60 * 1000);
        return `${date.getHours()}:${date.getMinutes()}`;
    }
    const columns = {
        id: {
            path: "_id",
            name: "Номер заказа",
            component: (stat, indx) => (
                <Link to={`/lk/statistic/${stat._id}`}>{indx + 1}</Link>
            )
        },
        telephone: {
            name: "Телефон",
            component: (stat) => stat.telephone
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
            path: "payment",
            name: "Способ оплаты"
        },
        deposit: {
            path: "deposit",
            name: "Залог"
        },
        timeRental: {
            name: "Время аренды",
            component: (stat) => stat.timeRental
        },
        date: {
            name: "Начало аренды",
            component: (stat) => addStartRental(stat.date)
        },
        newData: {
            name: "Время завершение",
            component: (stat) => addEndRental(stat.date, stat.timeRental)
        },
        status: {
            component: (stat) => (
                <button
                    onClick={() => onDelete(stat._id)}
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
