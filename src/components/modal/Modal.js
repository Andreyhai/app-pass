import React, {useState} from 'react';
import style from "./Modal.module.css"
const Modal = (props) => {
    const {active, setActive} = props

    const [x, setX] = useState(active)

    return (
        <section className={active ? style.modal__active : style.modal__closed} onClick={() => setActive(!active)}>
1
        </section>
    )

};

export default Modal;