import React, {ChangeEvent, useState} from "react";
import {requestAPI} from "./requestApi";


export const Request = () => {

    const [value, setValue] = useState<boolean>(false)
    const [response, setResponse] = useState<any>()

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.checked)
    }

    const onClickButtonHandler = () => {
        console.log(value)
        requestAPI.posting(value)
            .then(res => {
                setResponse(res.data.errorText)
            })
            .catch (e => {
                setResponse(e.response.data.errorText)
            })
    }

    return <div>
        <button onClick={onClickButtonHandler}>
            Button
        </button>
        <input type="checkbox" checked={value} onChange={onChangeInputHandler}/>
        <div>
            {response}
        </div>
    </div>
}