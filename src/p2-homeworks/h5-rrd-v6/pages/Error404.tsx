import React from 'react'
import s from "./../HW5.module.css"

function Error404() {
    return (
        <div className={s.error}>
            <div className={s.PNF}>Page not found!</div>
            <div className={s.cat}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <div className={s.meow}>meow</div>
        </div>
    )
}

export default Error404
