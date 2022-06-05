import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? {border: "2px solid red", outline: "none"} : undefined // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   style={inputClass}
                   placeholder='Add name'
                    onBlur={setNameCallback}/>
            {/*<span>{error}</span>*/}
            <button onClick={addUser} className={s.btnClass} disabled={!name}>add</button>
            <span>{totalUsers}</span>
           {error && <div style={{color: "red", fontWeight: "bold"}}>Title is required!</div>}
        </div>
    )
}

export default Greeting
