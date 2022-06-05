import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            <img src={props.avatar} className={s.photo}/>
            <div className={s.triangle}></div>
            <div className={s.int}>
                <div className={s.someName}>{props.name}</div>
                <div className={s.someText}>{props.message}</div>
                <span className={s.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
