import React, { useState, useEffect } from "react";
import ChoosingRental from "../components/common/form/choosingRental";
import NumberProduct from "../components/common/form/numberProduct";
import TimeRental from "../components/common/form/timeRental";
import RadioFild from "../components/common/form/radioFild";
import TextFieldRental from "../components/common/form/textFieldRental";
import { validator } from "../utils/validatorRental";
import { useDispatch } from "react-redux";
import { createMoney } from "../store/money";
import { createOrder } from "../store/orders";
import NavBarLk from "../components/ui/navBarLk";
import TextFieldMoney from "../components/common/form/textFieldMoney";
import TextFieldTotalPrice from "../components/common/form/textFieldTotalPrice";

function Rental() {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        place: "Пляж",
        quantity: 1,
        payment: "",
        deposit: 0,
        deposit_type: null,
        name: "User",
        phone: null,
        product: "сапборд",
        time_rental: 0.5,
        total_price: ""
    });
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
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            }
        },
        phone: {
            isRequiredPhome: {
                message: "Телефон обязательно для заполнения"
            },
            min: {
                message: "Телефон должен состоять минимум из 11 символов",
                value: 11
            }
        },
        total_price: {
            price: {
                message: "Заполни поле",
                value: 3
            }
        }
    };
    function goBack(e) {
        if (e.target.value === "Помещение") {
            setData((prevState) => ({
                ...prevState,
                time_rental: 12,
                total_price: 0
            }));
        } else {
            setData((prevState) => ({
                ...prevState,
                time_rental: 0.5,
                deposit: 0,
                deposit_type: null,
                phone: null,
                total_price: 0
            }));
        }
    }
    function apdateData() {
        setData({
            place: "Пляж",
            quantity: 1,
            payment: "",
            deposit: 0,
            deposit_type: null,
            name: "User",
            phone: null,
            product: "сапборд",
            time_rental: 0.5,
            total_price: 0
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
        dispatch(createOrder(data));
    };
    console.log(errors);
    return (
        <>
            <div className="Personal-area_nav">
                <NavBarLk />
            </div>
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
                            value={data.place}
                            name="place"
                            onChange={handleChange}
                        />
                        <NumberProduct
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                            quantity={data.quantity}
                            label="Количество"
                        />
                        <TimeRental
                            index={data.place}
                            hour={data.time_rental}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                            label="Время"
                        />
                        <TextFieldTotalPrice
                            name="total_price"
                            type="number"
                            value={data.total_price}
                            onChange={handleChange}
                            label="Цена"
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
                            (data.place === "Помещение" ? "active" : "")
                        }
                    >
                        <RadioFild
                            options={[
                                { name: "Документы", value: "document" },
                                { name: "Наличка", value: "money" }
                            ]}
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
                        <label className="rental-label">
                            Данные покупателя
                        </label>
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
                                name="phone"
                                type="number"
                                value={data.phone}
                                onChange={handleChange}
                                error={errors.phone}
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
        </>
    );
}
export default Rental;
