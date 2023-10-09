import React, {useState} from 'react';
import style from "./Home.module.css";
import {ERROR_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {deleteCookie, getCookie, setCookie} from "../../utils/cookie";
import axios from "axios";
import Header from "../../components/Header/Header";
import Modal from "../../components/modal/Modal";
const Home = (props) => {

    const [modalActive, setModalActive] = useState(false)

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




    // console.log(modalActive)

        return (
            <div className={style.body} >
                <Header />
                <button style={{
                    width: "50vw",
                    height: "20vh",
                    margin: "0 auto",
                    paddingTop: "10vh",
                    zIndex: 2
                }}
                        // onClick={() => setModalActive(!modalActive)}
                >change</button>
                {/*<Modal active={modalActive} setActive={setModalActive()}/>*/}
            </div>
        );
    }
        // else {
    //     window.location.replace(LOGIN_ROUTE)
    // }
};



export default Home;