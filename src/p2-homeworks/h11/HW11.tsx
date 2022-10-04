import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const changeDoubleRange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div className={s.hw11}>
            <h2 className={s.title}>Homeworks 11</h2>
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange value={[value1, value2]} onChangeRange={changeDoubleRange}/>
                <span>{value2}</span>
            </div>
        </div>
    )
}

export default HW11
