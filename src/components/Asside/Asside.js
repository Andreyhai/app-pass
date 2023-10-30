import React, {Fragment,useState,useEffect} from 'react';
import style from "./Asside.module.css";
import logo from "../../sourse/images/logo/logo.png";
import bin from "../../sourse/images/icons/bin.png";
import {Link} from "react-router-dom";
const Aside = ({title, theme, bottom, email, firstName, lastName, sureName, Date, data, open}) => {
    // const [length, setLength] = useState("")


    return (
        <div className={style.aside} style={theme === "light" ? {background: "#F9FBE9"} : {background: "#343434"}}>
            <div className={style.aside__title + " mb-3"}>
                {title}
            </div>
            {
                bottom ? <div className="flex flex-wrap mb-3 xl:text-xl" >

                    <div className="h-1/2 flex flex-wrap">

                        <div className="flex w-full items-center  gap-2">
                            <div className="flex w-1/2">имя:</div>
                            <div className={`flex w-1/2 justify-content-end p-1 py-2 text-s`}>{firstName}</div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex w-1/2 ">фамилия:</div>
                            <div className={`flex p-1 w-1/2 py-2 text-s justify-content-end`}>{lastName}</div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex w-1/2">отчество:</div>
                            <div className={`flex w-1/2 p-1 py-2 text-s justify-content-end`}>{sureName}</div>
                        </div>


                    </div>
                </div>
                    :
                    <div className="h-1/2 flex flex-wrap">
                        <div className="text-xl p-1 cursor-pointer" onClick={event => open("Изменение профиля")}>Изменить профиль</div>
                        <div className="text-xl p-1 cursor-pointer" onClick={event => open("Добавление сервиса")}>Добавить сервис</div>
                    </div>
            }
            


            {
                bottom &&
                <div className="flex flex-wrap items-center" >


                    <div className={style.aside__botton}>
                        <Link to={""} className={style.aside__botton_first + " text-sm"}  style={theme === "light" ? {color: "#3b3b3b"} : {color: "#FFF"}}>Войти как администратор</Link>
                        <div className={style.aside__botton_second}>

                            <Link  style={theme === "light" ? {color: "#3b3b3b"} : {color: "#FFF"}}>Выйти</Link>
                            <img src={bin} alt="rubish" />
                        </div>
                    </div>
                    <div className="flex w-full justify-content-around items-center text-gray-400 h-fit self-end ">
                        <div>Дата создания:</div>
                        <div className="flex p-1 py-2">{Date}</div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Aside;