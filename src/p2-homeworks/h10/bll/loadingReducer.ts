
const CHANGE_LOADING = 'CHANGE_LOADING'

const initState = {
    loading: false
}

type StateType = {
    loading: boolean
}

type ActionsType = LoadingActionCreatorType

type LoadingActionCreatorType = {
    type: 'CHANGE_LOADING'
    value: boolean
}

export const loadingReducer = (state: StateType = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        case CHANGE_LOADING: {
            return {...state, loading: action.value}
        }
        default: return state
    }
}

export const loadingAC = (value: boolean): LoadingActionCreatorType => ({type: CHANGE_LOADING, value}) // fix any