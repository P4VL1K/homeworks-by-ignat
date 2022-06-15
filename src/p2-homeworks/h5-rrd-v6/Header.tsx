import React from 'react'
import s from "./HW5.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";



function Header() {
    return (
        <ul className={s.test_menu}>
            <li>
                <a>+</a>
                <ul>
                    <li><NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR}>junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR_PLUS}>junior+</NavLink></li>
                </ul>
            </li>
        </ul>
    )
}

export default Header
