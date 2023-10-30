import React, {useState} from 'react';
import logo from "../../sourse/images/logo/logo.png";
import {Link} from "react-router-dom";
import {ERROR_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import style from "./Header.module.css";
import {deleteCookie} from "../../utils/cookie";
import Modal from "../modal/Modal";
import sun1 from "../../sourse/images/icons/sun/sun-1.png"
import sun2 from "../../sourse/images/icons/sun/sun-fill.png"
import avatar1 from "../../sourse/images/icons/avatar/outline.png"
import avatar2 from "../../sourse/images/icons/avatar/fill.png"

const Header = (props) => {

    return (
        <header className={style.header} style={props.theme === "light" ? {background: "#F9FBE9"} : {background: "#343434"}}>
            <Link to={HOME_ROUTE} className={style.header__logo}>
                <img className={style.header__logoImage} src={logo} alt="logo"/>
                <div className={style.header__logotitle} style={props.theme === "light" ? {color: "#000"} : {color: "#FFF"}}>Uppass</div>
            </Link>
            <nav className={style.header__navigation}>
                {/*<Link onClick={props.onClick} style={props.theme === "light" ? {color: "#000"} : {color: "#FFF"}}>{props.email}</Link>*/}
                <Link onClick={() => {
                    props.open("Добавление сервиса")
                }} className={props.theme === "light" ? "text-black hover:text-3xl" : "text-white hover:text-3xl"}>Добавить сервис</Link>
                <Link className={props.theme === "light" ? "text-black hover:text-3xl" : "text-white hover:text-3xl"}>О нас</Link>
            </nav>
            <div className="dropdown flex justify-content-center">
                {
                    props.theme === "light" ?
                        <button className="btn bg-white text-black btn-secondary dropdown flex items-center gap-4 px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={props.onClick}>
                            theme
                            <img className="w-8" src={sun1} alt="sun"/>
                        </button>
                        :
                        <button className="btn btn-secondary dropdown flex items-center gap-4 px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                            background: "#484646"
                        }} onClick={props.onClick}>
                            theme
                            <img className="w-8" src={sun2} alt="sun"/>
                        </button>
                }

            </div>
            <div className="flex items-center gap-3">
                <div className="w-7 h-7">
                    {props.theme === "light" && <img src={avatar1} alt="avatar" />}
                    {props.theme === "dark" && <img src={avatar2} alt="avatar" />}
                </div>
                <Link to={LOGIN_ROUTE} className={style.header__login}>{props.email}</Link>
            </div>

        </header>
    );
};

export default Header;