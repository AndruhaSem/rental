import React from "react";
import UserPage from "../components/page/userPage/userPage";
import { useParams } from "react-router-dom";

const User = () => {
    const params = useParams();
    const { userId } = params;

    return <>{userId ? <UserPage /> : null}</>;
};

export default User;
