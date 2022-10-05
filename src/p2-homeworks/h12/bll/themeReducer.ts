
export type InitialStateType = {
    theme: string
}

export type ChangeThemeActionType = {
    type: 'CHANGE-THEME'
    theme: string
}

const initState: InitialStateType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ChangeThemeActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {


            return  {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeAC = (theme: string): ChangeThemeActionType => ({type: 'CHANGE-THEME', theme}); // fix any