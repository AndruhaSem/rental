import React from "react";
import ModalForm from "./modalForm";
import PropTypes from "prop-types";

const ModalBar = ({ modal, ontoggleModal }) => {
    return (
        <div className={"modal " + (modal.isOpen ? "active" : "")}>
            <div className="modal-back" onClick={() => ontoggleModal()}></div>
            <div className="delete-modal">
                <h3 className="delete-modal__question">
                    Оставте заявку и мы вам перезвоним
                </h3>
                <hr className="hr" />
                <ModalForm ontoggleModal={ontoggleModal} modal={modal} />
            </div>
        </div>
    );
};
ModalBar.propTypes = {
    modal: PropTypes.object,
    ontoggleModal: PropTypes.func
};

export default ModalBar;
