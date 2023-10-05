import React from 'react';
import logo from "../../sourse/images/logo/logo.png";
import {Link} from "react-router-dom";
import {ERROR_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import style from "./Header.module.css";
import font from "../../fonts/JacquesFrancoisShadow-Regular.ttf"
import {deleteCookie} from "../../utils/cookie";
const Header = () => {
    return (
        <header className={style.header}>
            <Link to={HOME_ROUTE} className={style.header__logo} onClick={(event) =>localStorage.setItem("jwt", "111")}>
                <img className={style.header__logoImage} src={logo} alt="logo"/>
                <div className={style.header__logotitle}>Uppass</div>
            </Link>
            <nav className={style.header__navigation}>
                <Link to={ERROR_ROUTE}>Поменять пароли</Link>
                <Link to={ERROR_ROUTE}>О нас</Link>
                <Link to={ERROR_ROUTE}>надпись</Link>
                <Link to={ERROR_ROUTE}>надпись</Link>
                <Link to={ERROR_ROUTE}>надпись</Link>
            </nav>
            <Link to={LOGIN_ROUTE} className={style.header__login} onClick={() => deleteCookie("jwt")}>Вход</Link>
        </header>
    );
};

export default Header;