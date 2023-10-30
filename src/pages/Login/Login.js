import React, {useState} from 'react';

import style from "./Login.module.css";

import logo from "../../sourse/images/logo/LOGO.png";
import closeIcon from "../../sourse/images/icons/close-icon.png";
import strel1 from "../../sourse/images/icons/стрелки/right.png";
import strel2 from "../../sourse/images/icons/стрелки/left.png";
import axios from "axios";
import {Link} from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import { deleteCookie, setCookie } from '../../utils/cookie';

const __URL__ = "https://localhost:8080/developer/"

const Logotype = () => {
  return (
      <div className="w-full justify-center flex">
          <div className={style.logotype}>
              <img src={logo} alt="logotype"/>
          </div>
      </div>
  )
}

const CloseForm = () => {
  return (
      <div className={style.form__close}>
          <Link to={LOGIN_ROUTE}>
              <div className={style.form__close_block}>
                  <img src={closeIcon} alt="closeIcon"/>
              </div>
          </Link>
      </div>
  )
}

const Title = ({status}) => {
  return (
      <div className={style.form__title}>
          {status ? "Регистрация" : "Вход"}
      </div>
  )
}
const Input = ({type, placeholder, setInfo, info}) => {
    return (
        <div className={style.form__grid__input_t}>
            <input type={type} placeholder={placeholder} value={info} onChange={(e) => {
                setInfo("");
                setInfo(e.target.value)
                console.log(e.target.value)
            }}/>
        </div>
    )
}
const Inputs = (props) => {
    return (
      <div className={style.form__grid}>
          <img className={style.form__grid_first} src={strel2} alt="strel" onClick={props.setStatus}/>
          <div className={style.form__grid__input}>
              <Input type={"text"} placeholder={"логин"} setInfo={props.sets.setLogin} info={props.login} />
              <Input type={"password"}  placeholder={"пароль"} setInfo={props.sets.setPassword1} info={props.password} />
              {
                  props.status && <Input type={"password"} placeholder={"повтор"} setInfo={props.sets.setPassword2} />
              }
          </div>
          <img className={style.form__grid_second} src={strel1} alt="strel" onClick={props.setStatus}/>
      </div>
  )
}
const Button = ({login, password1, status}) => {
  return (
      <div className={style.form__button}>
          <div className={style.form__button_button} onClick={ (e) => {
              console.log({
                  login: login,
                  password: password1
              })
          }}>
              {status ? "зарегистрироваться" : "войти"}
          </div>
      </div>
  )
}
const RemakePassword = ({status}) => {
  if (!status)
    return (
        <div className={style.form__remake}>
            <div className={style.form__remake_title}>Забыли логин или пароль?</div>
            <Link className={style.form__remake_redtitle} to={""}>восстановить</Link>
        </div>
  )
}
const Login = (props) => {

    deleteCookie("jwt")

    // const [status, setStatus] = useState(props.status);
    const [status, setStatus] = useState(false);


    const [login, setLogin] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const changeStatus = () => {
        setLogin("")
        setPassword1("")
        setStatus(!status)
    }


    // const sendData = (e) => {
    //     // if (password1 === password2) {
    //     e.preventDefault()
    //     axios.post(
    //         __URL__ + "login",
    //         {
    //             "email" : login,
    //             "password" : password1,
    //         }
    //     ).then(rez => {
    //         if (rez.data != "incorrect") {
    //             setCookie("jwt", rez.data)
    //             window.location.replace(HOME_ROUTE)
    //         }
    //     }).catch(() => {
    //         console.log("Некоректная почта!")
    //     })
    //     // } else {
    //     // alert("Пароли не совпадают!")
    //     // }
    // }

    return (
        <React.Fragment>

            <Logotype />
            <div className={style.form}>
                <CloseForm />
                <Title status={status} />
                <Inputs
                    setStatus={changeStatus}
                    sets={
                        {
                            setLogin: setLogin,
                            setPassword1: setPassword1,
                            setPassword2: setPassword2
                        }
                    }
                    status={status}
                    login={login}
                    password={password1}
                />
                <RemakePassword status={status} />
                <Button login={login} password={password1} status={status} />
            </div>
        </React.Fragment>
    );
};

export default Login;