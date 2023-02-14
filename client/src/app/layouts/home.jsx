import React, { useState } from "react";
import SliderImage from "../components/ui/sliderImage";
import { useSelector } from "react-redux";
import { getSlider, getSliderLoadingStatus } from "../store/slider";

const Home = () => {
    const [offset, setOffset] = useState(0);
    const sliders = useSelector(getSlider());
    const isLOading = useSelector(getSliderLoadingStatus());

    function handleClickRight() {
        if (offset === 620) {
            setOffset((prevState) => (prevState = 0));
        } else {
            setOffset((prevState) => (prevState += 310));
        }
    }

    function handleClickLeft() {
        if (offset === 0) {
            setOffset((prevState) => (prevState = 620));
        } else {
            setOffset((prevState) => (prevState -= 310));
        }
    }

    if (!isLOading && sliders) {
        return (
            <div className="home-container">
                <div className="logo-contaimer">
                    <p className="logo-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, aspernatur pariatur! Porro totam eveniet assumenda
                        facere provident, labore deserunt neque.
                    </p>
                </div>

                <div className="slider-contaimer">
                    {sliders && (
                        <div className="slider">
                            <div className="block-information-sliders">
                                <div className="information-text">
                                    <p className="slider-text">Товары</p>
                                </div>

                                <div className="slider-button">
                                    <i
                                        className="bi bi-caret-left-fill"
                                        onClick={handleClickLeft}
                                    ></i>
                                    <i
                                        className="bi bi-caret-right-fill"
                                        onClick={handleClickRight}
                                    ></i>
                                </div>
                            </div>
                            <SliderImage offset={offset} sliders={sliders} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
    return <h2 className="loading">loading...</h2>;
};

export default Home;
