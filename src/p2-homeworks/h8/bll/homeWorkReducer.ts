import {ActionType, UserType} from "../HW8";


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                let result = [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
                return result
            } else if  (action.payload=== 'down') {
                let result = [...state.sort((a, b) => a.name > b.name ? 1 : -1).reverse()]
                return result
            } else return state
        }
        case 'check': {
            let resultMap = state.filter(u => u.age > action.payload)
            // let resultSort = resultMap.sort((a,b) => a.age - b.age)
            return resultMap
        }
        default: return state
    }
}