import React, { useState } from "react";
import { useSelector } from "react-redux";

import ProductList from "../components/common/productList";
import ModalBar from "../components/ui/modalBar";
import { getBooking } from "../store/booking";
const Reservations = () => {
    const products = useSelector(getBooking());
    const [modal, setModal] = useState({ isOpen: false, productTitle: "" });

    function toggleModal(productTitle = null) {
        setModal((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen,
            productTitle
        }));
    }

    if (products) {
        return (
            <div>
                <ModalBar modal={modal} ontoggleModal={toggleModal} />
                {products && (
                    <ProductList
                        products={products}
                        toggleModal={toggleModal}
                    />
                )}
            </div>
        );
    }
    return <h2 className="loading">loading...</h2>;
};

export default Reservations;
