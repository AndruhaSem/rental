import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    getStatisticsById,
    getStatisticsLoadingStatus,
    updateStatistic
} from "../../../store/statistics";

import { validator } from "../../../utils/validator";
import NumberProduct from "../../common/form/numberProduct";
import TimeRental from "../../common/form/timeRental";
import RadioFildPage from "../../common/form/radioFildPage";
import TextField from "../../common/form/textField";
import BackHistoryButton from "../../common/table/backButton";

const StatisticPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [data, setData] = useState();
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { statisticId } = params;
    const currentUser = useSelector(getStatisticsById(statisticId));
    const statisticLoading = useSelector(getStatisticsLoadingStatus());

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
            if (data.кentalСhoice === "Пляж") {
                setData((prevState) => ({
                    ...prevState,
                    timeRental: prevState.timeRental + 0.5
                }));
            } else {
                setData((prevState) => ({
                    ...prevState,
                    timeRental: (prevState.timeRental = 24)
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
            if (data.кentalСhoice === "Пляж") {
                if (data.timeRental > 0.5) {
                    setData((prevState) => ({
                        ...prevState,
                        timeRental: prevState.timeRental - 0.5
                    }));
                }
            } else {
                setData((prevState) => ({
                    ...prevState,
                    timeRental: (prevState.timeRental = 12)
                }));
            }
        }
    }
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
        dispatch(updateStatistic(data));
    }

    return (
        <>
            <BackHistoryButton />
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
                                    index={data.кentalСhoice}
                                    hour={data.timeRental}
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
                                            value: "Документы"
                                        },
                                        { name: "Наличка", value: "Наличка" }
                                    ]}
                                    value={data.deposit}
                                    name="deposit"
                                    onChange={handleChange}
                                    label="Залог"
                                />
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
                                    name="telephone"
                                    type="text"
                                    value={data.telephone}
                                    onChange={handleChange}
                                    error={errors.telephone}
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
                            "Loading..."
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatisticPage;
