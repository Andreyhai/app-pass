import React, { useState } from 'react';
import style from "./Home.module.css";
import {ERROR_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {deleteCookie, getCookie, setCookie} from "../../utils/cookie";
import axios from "axios";
import Header from "../../components/Header/Header";
import Aside from "../../components/Asside/Asside";
import Content from "../../components/content/Content";
const Home = (props) => {

    let l = [
        {
            id: "1",
            name: "vk",
            login: "account@gmail.com",
            pass: "1111",
        },
        {
            id: "2",
            name: "telegram",
            login: "david_2004@gmail.com",
            pass: "0000",
        },
        {
            id: "3",
            name: "youtube",
            login: "spacegame@gmail.com",
            pass: "3333",
        },
        {
            id: "3",
            name: "youtube",
            login: "spacegame@gmail.com",
            pass: "3333",
        },
        {
            id: "3",
            name: "youtube",
            login: "spacegame@gmail.com",
            pass: "3333",
        },
        {
            id: "3",
            name: "youtube",
            login: "spacegame@gmail.com",
            pass: "3333",
        },
        {
            id: "3",
            name: "youtube",
            login: "spacegame@gmail.com",
            pass: "3333",
        },
        {
            id: "3",
            name: "youtube",
            login: "spacegame@gmail.com",
            pass: "3333",
        },
        {
            id: "3",
            name: "youtube",
            login: "spacegame@gmail.com",
            pass: "3333",
        },
        {
            id: "3",
            name: "youtube",
            login: "spacegame@gmail.com",
            pass: "3333",
        },
        {
            id: "3",
            name: "youtube",
            login: "spacegame@gmail.com",
            pass: "3333",
        },
    ]

    // if (getCookie("jwt")) {
    //     axios.get(
    //         "http://localhost:8080/developer/valid",
    //         {headers: {
    //                 'Authorization': 'Bearer ' + getCookie("jwt") //the token is a variable which holds the token
    //             }}
    //     ).then(
    //         axios.get(
    //             "http://localhost:8080/data/list",
    //             {headers: {
    //                     'Authorization': 'Bearer ' + getCookie("jwt") //the token is a variable which holds the token
    //                 }}
    //         ).then(
    //             res => {
    //                 l = res
    //             }
    //         )
    //     ).catch(
    //         err => {
    //             deleteCookie("jwt")
    //             window.location.replace(LOGIN_ROUTE)
    //         }
    //     )

    return (
        <div className={style.body}>
            <Header />
            <div className={"flex"}>
                <Aside />
                <Content list={l} />
                <Aside />
            </div>

        </div>
    );
    // } else {
    //     window.location.replace(LOGIN_ROUTE)
    // }
};



export default Home;












//
// <div className={style.body__content}>
//     {
//
//         l.map(item => {
//
//                 return (
//                     <div key={item.id}>
//                         <div style={{display: "flex"}}>
//                             <div>name</div>
//                             <div>{item.name}</div>
//                         </div>
//                         <div style={{display: "flex"}}>
//                             <div>login</div>
//                             <div>{item.login}</div>
//                         </div>
//                         <div style={{display: "flex"}}>
//                             <div>password</div>
//                             <div>{item.pass}</div>
//                         </div>
//                     </div>
//                 )
//             }
//         )
//     }
// </div>
