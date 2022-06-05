import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string,
    checked:boolean
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        checked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (value:boolean) => {
        console.log(value)
        onChange && onChange(value as unknown as ChangeEvent<HTMLInputElement>)

        onChangeChecked && onChangeChecked(value)
        // сделайте так чтоб работал onChange и onChangeChecked
    }

    const finalInputClassName = `${s.customCheckbox} ${className ? className : ''}`

    return (
        <>
            <input
                type='checkbox'
                className={finalInputClassName}
                name={"test"}
                checked={checked}
                onChange={() => {}}
                {...restProps}
            />
            <label htmlFor={"test"} onClick={(e) => {onChangeCallback(!checked)}}/>
            {children && <span className={s.spanClassName}>{children}</span>}
        </> // благодаря label нажатие на спан передастся в инпут
    )
}

export default SuperCheckbox
