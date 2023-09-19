import React, {useState} from 'react';

import style from "./Login.module.css";

import logo from "../../sourse/images/logo/LOGO.png";
import closeIcon from "../../sourse/images/icons/close-icon.png";
import strel1 from "../../sourse/images/icons/right.png";
import strel2 from "../../sourse/images/icons/left.png";
import axios from "axios";
import {Link} from "react-router-dom";
import {ADMIN_ROUTE} from "../../utils/consts";

const __URL__ = "https://localhost:8080/developer/"
const Login = (props) => {

    const [status, setStatus] = useState(props.status);

    const [login, setLogin] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const changeStatus = () => {
        setStatus(!status)
    }

    const sendRegister = (e) => {
        // e.preventDefault()
        if (password1 === password2) {
            axios.post(
                __URL__ + "register",
                {
                    "email": login,
                    "password": password1
                }
            ).then(res => {
                if (res) {
                    // sendData();
                    // return window.location.replace()
                }
            }).catch(() => {
                alert("Некорректная почта!")
            })
        } else {
          alert("Пароли не совпадают!")
        }
    }

    const sendLogin = (e) => {
        // e.preventDefault()
        axios.post(
            __URL__ + "login",
            {
                "login": login,
                "password": password1
            }
        ).then(res => {
            if (res) {
                // sendData();
                // return window.location.replace()
            }
        }).catch(() => {
            alert("Некорректная почта!")
        })
    }

    return (
        <React.Fragment>
            <div className="w-full justify-center flex">
                <div className={style.logotype}>
                    <img src={logo} alt="logotype"/>
                </div>
            </div>

            <div className={style.form}>
                <div className={style.form__close}>
                    <Link to={ADMIN_ROUTE}>
                    <div className={style.form__close_block}>
                        <img src={closeIcon} alt="closeIcon"/>
                    </div>
                    </Link>
                </div>
                <div className={style.form__title}>
                    {status ? "Регистрация" : "Вход"}
                </div>
                <div className={style.form__grid}>
                    <img className={style.form__grid_first} src={strel2} alt="strel" onClick={changeStatus}/>
                    <div className={style.form__grid__input}>
                        <div className={style.form__grid__input_t}>
                            <input type="text" placeholder="логин" onChange={(e) => {
                                setLogin("");
                                setLogin(e.target.value)
                            }}/>
                        </div>
                        <div className={style.form__grid__input_t}>
                            <input type="text" placeholder="пароль" onChange={(e) => {
                                setPassword1("");
                                setPassword1(e.target.value)
                            }}/>
                        </div>
                        {
                            status && <div className={style.form__grid__input_t}>
                                <input type="text" placeholder="повтор" onChange={(e) => {
                                    setPassword2("");
                                    setPassword2(e.target.value)
                                }}/>
                            </div>
                        }
                    </div>
                    <img className={style.form__grid_second} src={strel1} alt="strel" onClick={changeStatus}/>
                </div>
                {
                    !status && <div className={style.form__remake}>
                        <div className={style.form__remake_title}>Забыли логин или пароль?</div>
                        <Link className={style.form__remake_redtitle} to={""}>восстановить</Link>
                    </div>
                }
                <div className={style.form__button}>
                    <div className={style.form__button_button} onClick={ () => {
                        if (status) {
                            sendRegister()
                        } else {
                            sendLogin()
                        }
                    }
                    }>
                        зарегистрироваться
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
};

export default Login;