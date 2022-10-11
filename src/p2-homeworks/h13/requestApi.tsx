import axios from "axios";


export const requestAPI = {
    posting (toggle: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: toggle})
    }
}