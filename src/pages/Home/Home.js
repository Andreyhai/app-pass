import React from 'react';
import style from "./Home.module.css";
import {ERROR_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {deleteCookie, getCookie, setCookie} from "../../utils/cookie";
import axios from "axios";
import Header from "../../components/Header/Header";
const Home = (props) => {

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
        return (
            <div className={style.body}>
                <div className="flex justify-center" >
                    <div className='w-full'>
                        <div className='flex flex-wrap justify-center' style={{margin: "0 auto",paddingTop: "0px", maxWidth: "1460px", minWidth: "300px"}}>
                            <Header />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        window.location.replace(LOGIN_ROUTE)
    }
};



export default Home;