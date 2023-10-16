import React from 'react';
import style from "./Content.module.css";

const Content = (props) => {

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
                                            background: "#ef9f32",
                                            borderRadius:"40px",
                                            paddingLeft: "20px"
                                        }} type={"text"} placeholder={item.name}>
                                            {/*{item.name}*/}
                                        </input>
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
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "170%",
                                            width: "100%",
                                            height: "80%",
                                            background: "#ef9f32",
                                            borderRadius:"40px"
                                        }}>
                                            {item.login}
                                        </div>
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
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "170%",
                                            width: "100%",
                                            height: "80%",
                                            background: "#ef9f32",
                                            borderRadius:"40px"
                                        }}>
                                            {item.pass}
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