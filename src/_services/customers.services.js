import Axios from "@/_services/caller.service";

let getAllCustomers = () => {
    return Axios.get('/customers')
}

export const customerService = {
    getAllCustomers
}