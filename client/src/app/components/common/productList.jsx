import React from "react";

const ProductList = ({ products, toggleModal }) => {
    return products.map((product) => (
        <div className="booking-product" key={product._id}>
            <div>
                <h1 className="booking-title">{product.product}</h1>
                <div className="booking-container">
                    <div className="booking-text">
                        <p>{product.title}</p>
                        <button
                            className="booking-button"
                            onClick={() => toggleModal(product.product)}
                        >
                            Забронировать
                        </button>
                    </div>
                    <img src={product.image} className="img" alt="" />
                </div>
            </div>
        </div>
    ));
};

export default ProductList;
