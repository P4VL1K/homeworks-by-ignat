import React from 'react'
import Clock from './Clock'
import s from './HW9.module.css'



function HW9() {
    return (
        <div className={s.main}>
            <h3 className={s.title}>Homeworks 9</h3>
            {/*should work (должно работать)*/}
            <Clock/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}

        </div>
    )
}

export default HW9
