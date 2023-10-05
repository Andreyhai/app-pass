import React from 'react';
import Header from "../../components/Header/Header";
import Aside from "../../components/Asside/Asside";
import Content from "../../components/Content/Content";
import {ERROR_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {deleteCookie, getCookie} from "../../utils/cookie";
import axios from "axios";
const Admin = () => {

    if (getCookie("jwt")) {
        axios.get(
            "url",
            {headers: {
                    'Authorization': 'Bearer ' + getCookie("jwt") //the token is a variable which holds the token
                }}
        ).then(
            alert("пропуск")
        ).catch(
            err => {
                alert("есть но не совпал")
                deleteCookie("jwt")
                window.location.replace(LOGIN_ROUTE)
            }
        )
    } else {
        window.location.replace(LOGIN_ROUTE)
    }

    return (
        <div style={{
            height: "100vh"
        }}>
            <Header />
            <div className={"flex"}>
                <Aside />
                <Content />
            </div>

        </div>
    );
};

export default Admin;