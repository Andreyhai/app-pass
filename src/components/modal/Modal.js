import React, {useState} from 'react';
import style from "./Modal.module.css"
import {HOME_ROUTE} from "../../utils/consts";
const Modal = (props) => {
    const {active} = props

    return (
        <section className={active ? style.modal__active : style.modal__closed}>
            {
                active &&
                <section className={style.modal__active__window}>
                    <header>
                        Добавить данные
                    </header>
                    <main>
                        <input type="text" placeholder="email" />
                        <input type="password" placeholder="password" />
                        <button>Добавить</button>
                        <button onClick={() => {window.location.replace(HOME_ROUTE)}}>назад</button>
                    </main>
                </section>
            }

        </section>
    )

};

export default Modal;