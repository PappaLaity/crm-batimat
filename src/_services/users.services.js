import Axios from "@/_services/caller.service";

let getAllUsers = () => {
    return Axios.get('/users')
}
let getUsersByStructure = (idStructure) => {
    return Axios.get('/users/' + idStructure)
}

let addUser = (credentials) => {
    return Axios.post('/users', credentials)
}
let updateUser = (credentials) => {
    return Axios.put('/users/' + credentials.id, credentials)
}
let getUser = (idUser) => {
    return Axios.get('/users/' + idUser)
}

export const userService = {
    getAllUsers, getUsersByStructure, addUser, updateUser, getUser
}