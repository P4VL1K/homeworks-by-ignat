import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const allBtnClasses = props.filter === 'all' ? s.active : '';
    const highBtnClasses = props.filter === 'high' ? s.active : '';
    const middleBtnClasses = props.filter === 'middle' ? s.active : '';
    const lowBtnClasses = props.filter === 'low' ? s.active : '';

    return (
        <div>

            {mappedAffairs}

            <button className={allBtnClasses} onClick={setAll}>All</button>
            <button className={highBtnClasses} onClick={setHigh}>High</button>
            <button className={middleBtnClasses} onClick={setMiddle}>Middle</button>
            <button className={lowBtnClasses} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
