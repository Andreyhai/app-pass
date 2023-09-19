import React from 'react';
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/ErrorPage";

import {HOME_ROUTE, ERROR_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE} from "./utils/consts";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Admin />} />
            <Route path={ERROR_ROUTE} element={<ErrorPage />} />
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={ADMIN_ROUTE} element={<Admin />} />
        </Routes>
    );
};

export default AppRouter;