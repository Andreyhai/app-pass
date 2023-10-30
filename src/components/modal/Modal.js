import React, {useState} from 'react';
import {HOME_ROUTE} from "../../utils/consts";

const Modal = (props) => {

    const [newLogin, setNewLogin] = useState(props.login)
    const [newPassword, setNewPassword] = useState(props.password)

    const Input = (props) => {
        return (
            <div className="flex w-full items-center gap-2 py-2 mx-4">
                <div className="w-4/6 text-2xl font-light">{props.title + ":"}</div>
                <input type="text" style={{
                    width: "70%",
                    height: "30px",
                    border: "1px solid black",
                    borderRadius: "40px",
                    padding: "20px"
                }} placeholder={props.placeholder} onChange={event => {props.setLogin(event.target.value)}}/>
            </div>
        )
    }
     return (
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed w-screen h-screen inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto" >
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                  <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                          <h3 className="text-base text-4xl font-normal leading-6 text-center text-gray-900" id="modal-title">{props.title}</h3>
                      </div>

                      {
                          props.title === "Добавление сервиса" &&
                          <div className="flex flex-wrap justify-content-center w-2/3 m-auto p-1 mb-2">
                              <Input title={"Сервис"} />
                              <Input title={"Логин"} placeholder={props.login} />
                              <Input title={"Пароль"} placeholder={props.password}/>
                          </div>
                      }

                      {
                          props.title === "Изменение сервиса" &&
                          <div className="flex flex-wrap justify-content-center w-2/3 m-auto p-1 mb-2">

                              <div className="flex w-full items-center py-2">
                                  <div className="w-4/12 text-2xl font-light">{"Логин" + ":"}</div>
                                  <input type="text" style={{
                                      width: "70%",
                                      height: "30px",
                                      border: "1px solid black",
                                      borderRadius: "40px",
                                      padding: "20px"
                                  }} placeholder={props.login} onChange={event => {setNewLogin(event.target.value)}}/>
                              </div>

                              <div className="flex w-full items-center py-2">
                                  <div className="w-4/12 text-2xl font-light">{"Пароль" + ":"}</div>
                                  <input type="text" style={{
                                      width: "70%",
                                      height: "30px",
                                      border: "1px solid black",
                                      borderRadius: "40px",
                                      padding: "20px"
                                  }} placeholder={props.password} onChange={event => {setNewPassword(event.target.value)}}/>
                              </div>


                              {/*<Input title={"Логин"} placeholder={props.login} setLogin={setNewLogin} />*/}
                              {/*<Input title={"Пароль"} placeholder={props.password} />*/}
                          </div>
                      }

                      {
                          props.title === "Изменение профиля" &&
                          <div className="flex flex-wrap justify-content-center w-5/6 m-auto py-3 px-2 mb-2">
                              <Input title={"Никнейм"} placeholder={props.nickName}/>
                              <Input title={"Имя"} placeholder={props.firstName}/>
                              <Input title={"Отчество"} placeholder={props.sureName}/>
                              <Input title={"Фамилия"} placeholder={props.lastName}/>

                          </div>
                      }

                      <div className="flex px-4 py-3 justify-content-around sm:px-6 mb-3">
                          <button type="button" className="flex px-8 py-1 text-xl bg-red-600 text-white rounded-3xl"
                                  onClick={event => {
                                      props.change()
                                      // console.log({
                                      //     newLogin: newLogin,
                                      //     newPassword:newPassword,
                                      // })
                                  }}
                          >Отменить</button>
                          <button type="button" className="flex px-8 py-1 text-xl bg-green-600 text-white rounded-3xl"
                                  onClick={event => {
                                      window.location.replace(HOME_ROUTE)
                                        props.change()
                                  }}
                          >Сохранить</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Modal;



















































//
//
// import React from 'react';
//
// const Modal = (props) => {
//     return (
//         <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
//
//             {/*Background backdrop, show/hide based on modal state.*/}
//
//             {/*Entering: "ease-out duration-300"*/}
//             {/*  From: "opacity-0"*/}
//             {/*  To: "opacity-100"*/}
//             {/*Leaving: "ease-in duration-200"*/}
//             {/*  From: "opacity-100"*/}
//             {/*  To: "opacity-0"*/}
//
//             <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
//
//             <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//                 <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//
//                     {/*Modal panel, show/hide based on modal state.*/}
//
//                     {/*Entering: "ease-out duration-300"*/}
//                     {/*  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}
//                     {/*  To: "opacity-100 translate-y-0 sm:scale-100"*/}
//                     {/*Leaving: "ease-in duration-200"*/}
//                     {/*  From: "opacity-100 translate-y-0 sm:scale-100"*/}
//                     {/*  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}
//
//                     <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//                         <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                             <h3 className="text-base text-2xl font-normal leading-6 text-center text-gray-900" id="modal-title">Изменение сервиса</h3>
//                         </div>
//                         <div className="flex w-2/3 mx-10 p-1 gap-3 justify-center justify-content-around items-center">
//                             <div>login:{"\r"}</div>
//                             <input type="text" style={{
//                                 width: "50%",
//                                 height: "30px",
//                                 border: "1px solid black",
//                                 borderRadius: "40px"
//                             }}/>
//                         </div>
//                         <div className="flex w-2/3 mx-10 p-1 gap-3 justify-content-around items-center">
//                             <div>password:</div>
//                             <input type="text" style={{
//                                 width: "50%",
//                                 height: "30px",
//                                 border: "1px solid black",
//                                 borderRadius: "40px"
//                             }}/>
//                         </div>
//                         <div className="flex bg-gray-50 px-4 py-3 justify-center sm:px-6">
//                             {/*<button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>*/}
//                             <button type="button" className="flex px-8 py-1 text-xl bg-green-600 text-white rounded-3xl"
//                                     onClick={event => 1}
//                             >Сохранить</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// };
//
// export default Modal;