import Axios from "@/_services/caller.service";


let getAllStructures = () => {
    return Axios.get('/structures')
}
let getProviders = () => {
    return Axios.get('/providers')
}

let addProviders = (credentials) => {
    return Axios.post('structures', credentials)
}
export const providerService = {
    getProviders, addProviders, getAllStructures
}