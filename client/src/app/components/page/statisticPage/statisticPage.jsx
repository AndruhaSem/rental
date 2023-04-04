import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    getOrdersById,
    getOrdersLoadingStatus,
    updateOrder,
    loadOrdersList
} from "../../../store/orders";

import { validator } from "../../../utils/validator";
import NumberProduct from "../../common/form/numberProduct";
import TimeRental from "../../common/form/timeRental";
import RadioFildPage from "../../common/form/radioFildPage";
import TextField from "../../common/form/textField";
import NavBarLk from "../../ui/navBarLk";
import TextFieldMoney from "../../common/form/textFieldMoney";

const StatisticPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [data, setData] = useState();
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { statisticId } = params;
    const currentUser = useSelector(getOrdersById(Number(statisticId)));
    const statisticLoading = useSelector(getOrdersLoadingStatus());
    useEffect(() => {
        dispatch(loadOrdersList());
    }, []);

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            }
        },
        telephone: {
            isRequired: {
                message: "Телефон обязательно для заполнения"
            }
        }
    };

    function handleIncrement(e) {
        if (e.target.className === "items__control") {
            setData((prevState) => ({
                ...prevState,
                quantity: prevState.quantity + 1
            }));
        } else {
            if (data.place === "Пляж") {
                setData((prevState) => ({
                    ...prevState,
                    time_rental: prevState.time_rental + 0.5
                }));
            } else {
                setData((prevState) => ({
                    ...prevState,
                    time_rental: (prevState.time_rental = 24)
                }));
            }
        }
    }
    function handleDecrement(e) {
        if (e.target.className === "items__control") {
            if (data.quantity > 1) {
                setData((prevState) => ({
                    ...prevState,
                    quantity: prevState.quantity - 1
                }));
            }
        } else {
            if (data.place === "Пляж") {
                if (data.time_rental > 0.5) {
                    setData((prevState) => ({
                        ...prevState,
                        time_rental: prevState.time_rental - 0.5
                    }));
                }
            } else {
                setData((prevState) => ({
                    ...prevState,
                    time_rental: (prevState.time_rental = 12)
                }));
            }
        }
    }
    console.log(data);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    useEffect(() => {
        if (currentUser && !data) {
            setData({ ...currentUser });
        }
    }, [currentUser, data]);

    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);

    useEffect(() => {
        validate();
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(updateOrder(data));
    }
    return (
        <>
            <div className="Personal-area_nav">
                <NavBarLk />
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        {!isLoading && !statisticLoading ? (
                            <form onSubmit={handleSubmit}>
                                <NumberProduct
                                    handleIncrement={handleIncrement}
                                    handleDecrement={handleDecrement}
                                    quantity={data.quantity}
                                    label="Количество"
                                    color={true}
                                />
                                <TimeRental
                                    index={data.place}
                                    hour={data.time_rental}
                                    handleIncrement={handleIncrement}
                                    handleDecrement={handleDecrement}
                                    label="Время"
                                    color={true}
                                />
                                <RadioFildPage
                                    options={[
                                        { name: "Наличные", value: "Наличные" },
                                        { name: "Перевод", value: "Перевод" }
                                    ]}
                                    value={data.payment}
                                    name="payment"
                                    onChange={handleChange}
                                    label="Способ оплаты"
                                />
                                <RadioFildPage
                                    options={[
                                        {
                                            name: "Документы",
                                            value: "document"
                                        },
                                        { name: "Наличка", value: "money" }
                                    ]}
                                    value={data.deposit_type}
                                    name="deposit_type"
                                    onChange={handleChange}
                                    label="Залог"
                                />
                                <div className="deposit-money">
                                    {data.deposit_type === "money" ? (
                                        <TextFieldMoney
                                            name="deposit"
                                            type="number"
                                            value={data.deposit}
                                            onChange={handleChange}
                                        />
                                    ) : null}
                                </div>
                                <TextField
                                    label="И.Ф.О"
                                    name="name"
                                    type="text"
                                    value={data.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                />
                                <TextField
                                    label="Телефон"
                                    name="phone"
                                    type="number"
                                    value={data.phone || ""}
                                    onChange={handleChange}
                                    error={errors.phone}
                                />

                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className="btn btn-primary w-100 mx-auto"
                                >
                                    Обновить
                                </button>
                            </form>
                        ) : (
                            "Loadingg..."
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatisticPage;
