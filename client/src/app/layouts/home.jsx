import React, { useEffect, useRef, useState } from "react";
import Slider from "../components/ui/slider";
import { useDispatch, useSelector } from "react-redux";
import {
    getSlider,
    getSliderLoadingStatus,
    loadSliderList
} from "../store/slider";

const Home = () => {
    const [offset, setOffset] = useState(0);
    const sliders = useSelector(getSlider());
    const isLOading = useSelector(getSliderLoadingStatus());
    const count = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadSliderList());
    }, []);
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

    function handleTouchStart(e) {
        const firstTouch = e.touches[0].clientX;
        count.current = firstTouch;
    }

    function handleTouchMove(e) {
        if (!count.current) {
            return false;
        }
        const x2 = e.touches[0].clientX;
        const xDiff = x2 - count.current;
        if (xDiff > 0) handleClickLeft();
        else handleClickRight();
        count.current = null;
    }

    if (!isLOading && sliders) {
        return (
            <div className="home-container">
                <div className="logo-contaimer">
                    <p className="logo-text">
                        Главная страница для аренды и бронирования Sub-board
                    </p>
                </div>

                <div className="slider-contaimer">
                    {sliders && (
                        <Slider
                            offset={offset}
                            sliders={sliders}
                            handleClickLeft={handleClickLeft}
                            handleClickRight={handleClickRight}
                            handleTouchStart={handleTouchStart}
                            handleTouchMove={handleTouchMove}
                        />
                    )}
                </div>
            </div>
        );
    }
    return <h2 className="loading">loading...</h2>;
};

export default Home;
