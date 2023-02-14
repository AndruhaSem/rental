import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import { messageTg } from "../../utils/messageTg";
import PropTypes from "prop-types";

const ModalForm = ({ ontoggleModal, modal }) => {
    const [data, setData] = useState({
        name: "",
        phone: ""
    });
    const [errors, setErrors] = useState({});
    function handleChange(target) {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }
    const validatorConfig = {
        name: {
            isRequired: {
                message: "ФИО обязательна для заполнения"
            }
        },
        phone: {
            isRequired: {
                message: "Телефон обязателен для заполнения"
            },
            min: {
                message: "Телефон должен состоять минимум из 11 символов",
                value: 11
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    function validate() {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
    const isValid = Object.keys(errors).length === 0;

    function handleSubmit(e) {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    }
    function clearImput() {
        setData((prevState) => ({
            ...prevState,
            name: "",
            phone: ""
        }));
    }
    function closeModalPostsForm(name, phone, modal) {
        ontoggleModal();
        messageTg(name, phone, modal.productTitle);
        clearImput();
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="фИО"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label="Телефон"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                error={errors.phone}
            />
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
                onClick={() =>
                    closeModalPostsForm(data.name, data.phone, modal)
                }
            >
                Забронировать
            </button>
        </form>
    );
};
ModalForm.propTypes = {
    modal: PropTypes.object,
    ontoggleModal: PropTypes.func
};
export default ModalForm;
