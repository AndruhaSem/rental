import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getCurrentUserData,
    getUsersLoadingStatus,
    updateUser
} from "../store/users";

const ProductCount = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const statisticUser = useSelector(getUsersLoadingStatus());
    const currentUser = useSelector(getCurrentUserData());
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

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: Number(target.value)
        }));
    };
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(updateUser(data));
        console.log(data);
    }

    return (
        <div>
            {!isLoading && !statisticUser ? (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="products_count"
                            className="lb-text-fild"
                        >
                            Кол-во сапбордов
                        </label>
                        <div className="input-group has-validation">
                            <input
                                id="products_count"
                                name="products_count"
                                type="text"
                                value={data.products_count}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 mx-auto"
                    >
                        Обновить
                    </button>
                </form>
            ) : (
                "Loadingg..."
            )}
        </div>
    );
};

export default ProductCount;
