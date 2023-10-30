import React, { useState } from 'react';
import style from "./Home.module.css";
import {ERROR_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {deleteCookie, getCookie, setCookie} from "../../utils/cookie";
import axios from "axios";
import Header from "../../components/Header/Header";
import Aside from "../../components/Asside/Asside";
import Content from "../../components/content/Content";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../../theme";
import Footer from "../../components/footer/Footer";
import Modal from "../../components/modal/Modal";

const Object = {
    email: "daemangasaryan@gmail.com111111",
    firstName: "Davit",
    lastName: "Mangasaryan",
    sureName: "Karenovich",
    Date: "10.12.2023",
    nickName: "davo123",
}

const Home = (props) => {
    const [modalActive, setModalActive] = useState(false)

    const [title, setTitle] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const closeActive = () => {
        console.log("closed")
        setModalActive(false)
        setTitle("")
        setLogin("")
        setPassword("")
    }

    const openActive = (title, login, password) => {
        setModalActive(true)
        setTitle(title)
        setLogin(login)
        setPassword(password)
    }
    const [theme, setTheme] = useState("light");

    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

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

        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className="App">
                {
                    modalActive && <Modal
                        active={props.modal}
                        change={closeActive}
                        theme={props.theme}
                        title={title}
                        login={login}
                        password={password}
                        nickName={Object.nickName}
                        firstName={Object.firstName}
                        lastName={Object.lastName}
                        sureName={Object.sureName}
                    />
                }
                <div className={style.body + "flex min-h-screen flex-col content-center"}>
                    <Header
                        onClick={switchTheme}
                        theme={theme}
                        email={Object.email}
                        login={Object.nickName}
                        modal={modalActive}
                        open={openActive}
                        close={closeActive}
                    />
                    <div className={"flex"}>
                        <Aside
                            title={"Аккаунт"}
                            bottom={true}
                            theme={theme}
                            email={Object.email}
                            firstName={Object.firstName}
                            lastName={Object.lastName}
                            sureName={Object.sureName}
                            Date={Object.Date}
                            nickName={Object.nickName}
                        />
                        <Content
                            list={l}
                            theme={theme}
                            modal={modalActive}
                            open={openActive}
                            close={closeActive}
                            login={login}
                            password={password}
                        />
                        <Aside
                            title={"Меню"}
                            bottom={false}
                            theme={theme}
                            open={openActive}
                            close={closeActive}
                            modal={modalActive}
                            data={Object}
                        />
                    </div>
                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    );
    {/*// } else {*/}
    {/*//     window.location.replace(LOGIN_ROUTE)*/}
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
