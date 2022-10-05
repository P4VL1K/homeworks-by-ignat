import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {

    const dispatch = useDispatch()

    const theme = useSelector<AppStoreType, string>(st => st.theme.theme)

    const onChangeCallback = (theme: string) => {

        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <span className={s[theme + '-text']}>
                <h2 className={s.title}>Homeworks 12</h2>
            </span>

            {/*should work (должно работать)*/}
            <div className={s.selector}>
                <SuperSelect options={themes} onChangeOption={onChangeCallback}/>
            </div>
        </div>
    );
}

export default HW12;
