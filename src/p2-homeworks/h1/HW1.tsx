import React from 'react'
import Message from "./Message";
import s from './Message.module.css'

const messageData = {
    avatar: 'https://www.worldsbestcatlitter.com/WBCL/wp-content/uploads/2017/05/1-hello.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}



const HW1 = () => {
    return (
        <div className={s.main}>
           <div className={s.hw1}>Homeworks 1</div>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
        </div>
    )
}

export default HW1
