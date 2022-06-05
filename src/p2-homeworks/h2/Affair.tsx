import React from 'react'
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            <span className={s.names}>{props.affair.name}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
