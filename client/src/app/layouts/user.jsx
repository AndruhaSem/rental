import React from "react";
import UserPage from "../components/page/userPage/userPage";
import { useParams } from "react-router-dom";
import Home from "./home";

const User = () => {
    const params = useParams();
    const { userId } = params;

    return <>{userId ? <UserPage /> : <Home />}</>;
};

export default User;
