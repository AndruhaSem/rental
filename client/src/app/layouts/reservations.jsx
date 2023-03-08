import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductList from "../components/common/productList";
import ModalBar from "../components/ui/modalBar";
import { getBooking, loadBookingList } from "../store/booking";
const Reservations = () => {
    const products = useSelector(getBooking());
    const [modal, setModal] = useState({ isOpen: false, productTitle: "" });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBookingList());
    }, []);

    function toggleModal(productTitle = null) {
        setModal((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen,
            productTitle
        }));
    }

    if (products) {
        return (
            <div className="booking">
                <ModalBar modal={modal} ontoggleModal={toggleModal} />
                <div className="booking-list">
                    {products && (
                        <ProductList
                            products={products}
                            toggleModal={toggleModal}
                        />
                    )}
                </div>
            </div>
        );
    }
    return <h2 className="loading">loading...</h2>;
};

export default Reservations;
