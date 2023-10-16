import React, {useState} from 'react';
import style from "./Content.module.css";
import bin from "../../sourse/images/icons/bin.png"
import {HOME_ROUTE} from "../../utils/consts";

const Content = (props) => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [list, setList] = useState(props.list);

    return (
        <section className={style.content}>
            <header className={style.content__header}>Все сервисы</header>
            <main className={style.content__main}>


                {

                    props.list.map(item => {

                            return (
                                <div className={style.content_item} key={item.id}>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                        gap: "40px"
                                    }}>
                                        <div style={{
                                            fontSize: "30px",
                                            justifySelf: "start"
                                        }}>name:</div>
                                        <input style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "170%",
                                            width: "100%",
                                            height: "80%",
                                            background: "#ecbf83",
                                            borderRadius:"40px",
                                            paddingLeft: "20px",
                                        }} type={"text"} placeholder={item.name} />
                                        <img src={bin} alt="bin" style={{
                                            width: "10%",
                                            height: "50%"
                                        }} onClick={(event) => {
                                            console.log(item.name);
                                            window.location.replace(HOME_ROUTE)
                                        }}/>
                                    </div>




                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                        gap: "40px"
                                    }}>
                                        <div style={{
                                            fontSize: "30px",
                                            justifySelf: "start"
                                        }}>login:</div>
                                        <input style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "170%",
                                            width: "100%",
                                            height: "80%",
                                            background: "#ecbf83",
                                            borderRadius:"40px",
                                            paddingLeft: "20px",
                                        }} type={"text"} placeholder={item.login} onChange={(event) => setLogin(event.target.value)} />
                                    </div>





                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                        gap: "40px"
                                    }}>
                                        <div style={{
                                            fontSize: "30px",
                                            justifySelf: "start"
                                        }}>password:</div>
                                        <input style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "170%",
                                            width: "100%",
                                            height: "80%",
                                            background: "#ecbf83",
                                            borderRadius:"40px",
                                            paddingLeft: "20px"
                                        }} type={"text"} placeholder={item.pass} onChange={(event) => setPassword(event.target.value)} />
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: "10px",
                                    }}>
                                        {/*<div style={{*/}
                                        {/*    display: "flex",*/}
                                        {/*    alignItems: "center",*/}
                                        {/*    justifyContent: "center",*/}
                                        {/*    fontSize: "170%",*/}
                                        {/*    width: "50%",*/}
                                        {/*    height: "100%",*/}
                                        {/*    background: "#ff001e",*/}
                                        {/*    borderRadius:"40px",*/}
                                        {/*    paddingLeft: "20px",*/}
                                        {/*    cursor: "pointer",*/}
                                        {/*}}>удалить</div>*/}
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "170%",
                                            width: "50%",
                                            height: "100%",
                                            background: "#c7ea6e",
                                            borderRadius:"40px",
                                            // paddingLeft: "20px",
                                            cursor: "pointer",
                                        }} onClick={(event) => {
                                            if (login !== "" && password !== "") {
                                                console.log({
                                                    name: item.name,
                                                    login: login,
                                                    password: password,
                                                })
                                            } else {
                                                console.log(
                                                    {
                                                        name: item.name,
                                                        login: item.login,
                                                        password: item.pass,
                                                    }
                                                )
                                            }

                                            }}>сохранить</div>
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