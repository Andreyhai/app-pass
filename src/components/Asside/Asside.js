import React from 'react';
import style from "./Asside.module.css";
import menuIcon from "../../sourse/images/icons/menu-icon.png";
import logo from "../../sourse/images/logo/logo.png";
import rubish from "../../sourse/images/icons/rubish.png";
import {Link} from "react-router-dom";

const MyLink = (props) => {
    const name = props.name;

    return (
        <div className={style.aside__links_link}>
            <img src={logo} alt="logo"/>
            <div className={style.aside__links_linkitem}>{name}</div>
        </div>
    )
};

const Aside = () => {
    return (
        <div className={style.aside}>
            <div className={style.aside__menu}>
                <img className={style.aside__menuicon} src={menuIcon} alt="menu"/>
                <div className={style.aside__menutitle}>Меню</div>
            </div>
            <div className={style.aside__links}>
                <MyLink name={"Сервисы"} />
                <MyLink name={"Аккаунт"} />
            </div>
            <div className={style.aside__botton}>
                <Link to={""} className={style.aside__botton_first}>Войти как администратор</Link>
                <div className={style.aside__botton_second}>
                    <img src={rubish} alt="rubish"/>
                    <Link>Выйти</Link>
                </div>
            </div>
        </div>
    );
};

export default Aside;