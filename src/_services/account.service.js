import Axios from "@/_services/caller.service";


let login = (credentials) => {
    return Axios.post('login', credentials)
}

let logout = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
}

let getToken = () => {
    return localStorage.getItem('token')
}
let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

let getUserId = () => {
    return localStorage.getItem('userId')
}

let saveUserId = (id) => {
    return localStorage.setItem('userId', id)
}

export const accountService = {
    login, logout, saveToken, isLogged, getToken, getUserId, saveUserId
}