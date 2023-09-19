import React, {useState} from 'react';
import  style from "./Content.module.css";
import {Link} from "react-router-dom";
import axios from "axios";

const __URL__ = "https://localhost:8080/developer/"
const Content = () => {
    const [opened1, setOpened1] = useState(false)
    const [opened2, setOpened2] = useState(false)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [middlname, setMiddlename] = useState("")
    const [nickname, setNickname] = useState("")
    const [nameOfService, setNameOfService] = useState("")
    const [url, setUrl] = useState("")

    const set1 = () => {
        if (opened2) {
            setOpened2(!opened2)
            setOpened1(!opened1)
        } else {
            setOpened1(!opened1)
        }
        console.log({
            email: email,
            name: name,
            middlname: middlname,
            nickname: nickname,
        })
    }

    const set2 = () => {
        if (opened1) {
            setOpened1(!opened1)
            setOpened2(!opened2)
        } else {
            setOpened2(!opened2)
        }
        console.log({
            nameOfService: nameOfService,
            url: url,
        })
    }

    const addService = (e) => {
        e.preventDefault()
        axios.post(
            __URL__ + "login",
            {
                "nameOfService": nameOfService,
                "url": url
            }
        ).then(res => {
            if (res) {
                // return window.location.replace()
            }
        }).catch(() => {
            alert("Некорректные данные!")
        })
    }
    
    return (
        <div className={style.content}>
            <div className={style.content__firstBox}>
                <div className={style.content__firstBox_title}>Личная информация</div>
                <div className={style.content__firstBox_item}>
                    <div className={style.content__firstBox_itemname}>Почта:</div>
                    <input type="email" placeholder={"Davit@gmail.com"} onChange={(e) => {
                        setEmail("");
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div className={style.content__firstBox_item}>
                    <div className={style.content__firstBox_itemname}>Имя:</div>
                    <input type="text" placeholder={"Davit"} onChange={(e) => {
                        setName("");
                        setName(e.target.value)
                    }}/>
                </div>
                <div className={style.content__firstBox_item}>
                    <div className={style.content__firstBox_itemname}>Фамилия:</div>
                    <input type="text" placeholder={"Mangasaryan"} onChange={(e) => {
                        setMiddlename("");
                        setMiddlename(e.target.value)
                    }}/>
                </div>
                <div className={style.content__firstBox_item}>
                    <div className={style.content__firstBox_itemname}>Никнейм:</div>
                    <input type="text" placeholder={"MDav0"} onChange={(e) => {
                        setNickname("");
                        setNickname(e.target.value)
                    }}/>
                </div>
            </div>
            <div className={style.content__buttons}>
                <div className={style.content__buttons_left} onClick={set1}>Просмотреть всё</div>
                <div className={style.content__buttons_right} onClick={set2}>Добавить сервисы</div>
            </div>
            {
                opened1 &&
                <div className={style.content__secondBox}>
                    <div className={style.content__secondBox_item}>
                        <div className={style.content__secondBox_itemname}>Вконтакте</div>
                        <Link to={"https://vk.com"} className={style.content__secondBox_itemurl}>Ссылка: https://vk.com</Link>
                    </div>
                    <div className={style.content__secondBox_item}>
                        <div className={style.content__secondBox_itemname}>Facebook</div>
                        <Link to={"https://facebook.com"} className={style.content__secondBox_itemurl}>Ссылка: https://facebook.com</Link>
                    </div>
                    <div className={style.content__secondBox_item}>
                        <div className={style.content__secondBox_itemname}>YouTube</div>
                        <Link to={"https://youtube.com"} className={style.content__secondBox_itemurl}>Ссылка: https://youtube.com</Link>
                    </div>
                    <div className={style.content__secondBox_item}>
                        <div className={style.content__secondBox_itemname}>Figma</div>
                        <Link to={"https://figma.com"} className={style.content__secondBox_itemurl}>Ссылка: https://figma.com</Link>
                    </div>
                    <div className={style.content__secondBox_item}>
                        <div className={style.content__secondBox_itemname}>Telegram</div>
                        <Link to={"https://t.me"} className={style.content__secondBox_itemurl}>Ссылка: https://t.me</Link>
                    </div>
                </div>
            }
            {
                opened2 &&
                <div className={style.content__firstBox}>
                    <div className={style.content__firstBox_title}>Добавить сервисы</div>
                    <div className={style.content__firstBoxx}>
                        <div className={style.content__firstBoxx_item1}>
                            <div className={style.content__firstBoxx_item1name}>Название:</div>
                            <input type="email" placeholder={"https://service.com"} onChange={(e) => {
                                setNameOfService("");
                                setNameOfService(e.target.value)
                            }}/>
                        </div>
                        <div className={style.content__firstBoxx_item1}>
                            <div className={style.content__firstBoxx_item1name}>Ссылка:</div>
                            <input type="text" placeholder={"https://url.com"} onChange={(e) => {
                                setUrl("");
                                setUrl(e.target.value)
                            }}/>
                        </div>
                    </div>
                    <div className={style.contentButton} onClick={set2}>+ Добавить</div>
                </div>
            }

        </div>
    );
};

export default Content;