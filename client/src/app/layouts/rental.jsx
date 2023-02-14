import React, { useState, useEffect } from "react";
import ChoosingRental from "../components/common/form/choosingRental";
import NumberProduct from "../components/common/form/numberProduct";
import TimeRental from "../components/common/form/timeRental";
import RadioFild from "../components/common/form/radioFild";
import TextFieldRental from "../components/common/form/textFieldRental";
import { validator } from "../utils/validatorRental";
import { useDispatch } from "react-redux";
import { createMoney } from "../store/money";
import { createStatistics } from "../store/statistics";

function Rental() {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        кentalСhoice: "Пляж",
        quantity: 1,
        payment: "",
        deposit: "Нет залога",
        name: "User",
        telephone: "Телефон не указан",
        product: "сапборд",
        timeRental: 0.5
    });

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
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        payment: {
            isRequiredPayment: {
                message: "Выберете способ оплаты"
            }
        },
        deposit: {
            isRequired: {
                message: "Выберете способ залога"
            }
        },
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
    function goBack(e) {
        if (e.target.value === "Помещение") {
            setData((prevState) => ({
                ...prevState,
                timeRental: 12
            }));
        } else {
            setData((prevState) => ({
                ...prevState,
                timeRental: 0.5,
                deposit: "Нет залога",
                telephone: "Телефон не указан"
            }));
        }
    }
    function apdateData() {
        setData({
            кentalСhoice: "Пляж",
            quantity: 1,
            payment: "",
            deposit: "Нет залога",
            name: "User",
            telephone: "Телефон не указан",
            product: "сапборд",
            timeRental: 0.5
        });
    }
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        console.log(data);
        apdateData();
        dispatch(createMoney(data));
        dispatch(createStatistics(data));
    };

    return (
        <div className="containerr">
            <form onSubmit={handleSubmit}>
                <div className="containerr_rental">
                    <h2>SUP</h2>
                    <ChoosingRental
                        options={[
                            { name: "Пляж", value: "Пляж", func: goBack },
                            {
                                name: "Помещение",
                                value: "Помещение",
                                func: goBack
                            }
                        ]}
                        value={data.кentalСhoice}
                        name="кentalСhoice"
                        onChange={handleChange}
                    />
                    <NumberProduct
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        quantity={data.quantity}
                        label="Количество"
                    />
                    <TimeRental
                        index={data.кentalСhoice}
                        hour={data.timeRental}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        label="Время"
                    />
                    <RadioFild
                        options={[
                            { name: "Наличные", value: "Наличные" },
                            { name: "Перевод", value: "Перевод" }
                        ]}
                        name="payment"
                        onChange={handleChange}
                        label="Способ оплаты"
                    />
                </div>
                <div
                    className={
                        "container-info__client " +
                        (data.кentalСhoice === "Помещение" ? "active" : "")
                    }
                >
                    <RadioFild
                        options={[
                            { name: "Документы", value: "Документы" },
                            { name: "Наличка", value: "Наличка" }
                        ]}
                        name="deposit"
                        onChange={handleChange}
                        label="Залог"
                    />
                    <label className="rental-label">Данные покупателя</label>
                    <div className="width">
                        <TextFieldRental
                            label="И.Ф.О"
                            name="name"
                            type="text"
                            value={data.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <TextFieldRental
                            label="Телефон"
                            name="telephone"
                            type="text"
                            value={data.telephone}
                            onChange={handleChange}
                            error={errors.telephone}
                        />
                    </div>
                </div>
                <div className="create_button">
                    <button
                        className="create-button__arrange"
                        type="submit"
                        disabled={!isValid}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Rental;
