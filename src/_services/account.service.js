import Axios from "@/_services/caller.service";


let login = (credentials) => {
    return Axios.post('login', credentials)
}

let logout = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    localStorage.removeItem('structureId')
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
let getCompanyId = () => {
    return localStorage.getItem('structureId')
}
let getRole = () => {
    return localStorage.getItem('role')
}

let saveUserId = (id) => {
    return localStorage.setItem('userId', id)
}
let saveCompanyId = (id) => {
    return localStorage.setItem('structureId', id)
}
let saveRole = (role) => {
    return localStorage.setItem('role', role)
}

export const accountService = {
    login, logout, saveToken, isLogged, getToken, getUserId, saveUserId, getRole, saveRole, getCompanyId, saveCompanyId
}