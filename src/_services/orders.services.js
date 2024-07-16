import Axios from "@/_services/caller.service";

let getAllOrder = () => {
    return Axios.get('/orders')
}

let addOrder = (credentials) => {
    return Axios.post('/orders', credentials)
}
let getOrder = (id) => {
    return Axios.get('/orders/' + id)
}

export const ordersService = {
    getAllOrder,getOrder,addOrder
}