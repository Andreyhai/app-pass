import React, {useState} from 'react';
import logo from "../../sourse/images/logo/logo.png";
import {Link} from "react-router-dom";
import {ERROR_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import style from "./Header.module.css";
import {deleteCookie} from "../../utils/cookie";
import Modal from "../modal/Modal";
const Header = () => {

    const [modalActive, setModalActive] = useState(false)

    console.log(modalActive)

    return (
        <header className={style.header}>
            <Link to={HOME_ROUTE} className={style.header__logo}>
                <img className={style.header__logoImage} src={logo} alt="logo"/>
                <div className={style.header__logotitle}>Uppass</div>
            </Link>
            <nav className={style.header__navigation}>
                <Link>Поменять пароли</Link>
                <Link onClick={() => {
                    setModalActive(true)
                    console.log(modalActive)
                }}>Добавить</Link>
                <Link>О нас</Link>
            </nav>
            <Link to={LOGIN_ROUTE} className={style.header__login}>Вход</Link>
            {/*<Modal active={modalActive} setActive={setModalActive}/>*/}

        </header>
    );
};

export default Header;