import React, {useState} from 'react';
import style from "./Content.module.css";
import logo from "../../sourse/images/logo/logo.png"
import bin from "../../sourse/images/icons/bin.png"
import pen from "../../sourse/images/icons/pen.png"
import del from "../../sourse/images/icons/del.png"
import {HOME_ROUTE} from "../../utils/consts";
import Modal from "../modal/Modal";

const Content = (props) => {

    const [list, setList] = useState(props.list);
    
    return (
        <section className={style.content + " mb-8"} style={props.theme === "light" ? {background: ""} : {background: "#4d4c4c"}}>
            <header className={style.content__header} style={props.theme === "light" ? {} : {color: "#c4c3c3"}}>Все сервисы</header>
            <main className={style.content__main}>


                {

                    props.list.map((item, index) => {
                            return (
                                // <MyItem index={index} name={item.name} login={item.login} pass={item.pass} theme={props.theme} />
                        <div key={index} className={style.nft} style={props.theme === "light" ? {background: "transparent"} : {background: "#1f1f1f"}}>
                            <div className={style.main}>
                                {/*<div className={style.tokenImage}>*/}
                                {/*    <img src={logo} alt="LOGO" />*/}
                                {/*</div>*/}

                                <div className={"flex justify-between"}>
                                    <h2 style={props.theme === "light" ? {color: "black"} : {color: "white"}}>{props.name}</h2>
                                    <div className={style.icons}>
                                        <div className={style.icons_yellow} onClick={() => {
                                            props.open("Изменение сервиса", item.login, item.pass)
                                        }}>
                                            <img src={pen} alt="pen"/>
                                        </div>
                                        <div className={style.icons_red}>
                                            <img src={del} alt="del"/>
                                        </div>
                                    </div>
                                </div>

                                <div className={style.main_gridBox}>
                                    <p className={style.description} style={{
                                        color: "gray"
                                    }}>логин:</p>
                                    <p className={style.description}>{item.login}</p>
                                </div>
                                <div className={style.main_gridBox}>
                                    <p className={style.description} style={{
                                        color: "gray"
                                    }}>пароль:</p>
                                    <p className={style.description}>{item.pass}</p>
                                </div>
                                <div className={style.tokenInfo}>
                                    <div className={style.price}>
                                        <ins>◘</ins>
                                        <p>0.031 ETH</p>
                                    </div>
                                    <div className={style.duration}>
                                        <ins>◷</ins>
                                        <p>11 days left</p>
                                    </div>
                                </div>
                                <hr />
                                <div className={style.creator}>
                                    <div className="flex items-center">
                                        <div className={style.wrapper}>
                                            <img src={logo} alt="Creator" />
                                        </div>
                                        <p><ins>Creation of</ins> Uppass</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            )
                        }
                    )
                }

            </main>



        </section>
    );
};

export default Content;