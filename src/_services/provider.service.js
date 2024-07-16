import Axios from "@/_services/caller.service";


let getAllStructures = () => {
    return Axios.get('/structures')
}
let getProviders = () => {
    return Axios.get('/providers')
}

let getProvider = (uid) => {
    return Axios.get('/structures/' + uid)
}

let addProviders = (credentials) => {
    return Axios.post('structures', credentials)
}
let updateProvider = (credentials) => {
    return Axios.put('/structures/' + credentials.id, credentials)
}
export const providerService = {
    getProviders, addProviders, getAllStructures, updateProvider, getProvider
}