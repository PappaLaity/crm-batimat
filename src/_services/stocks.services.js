import Axios from "@/_services/caller.service";

let getAllStock = () => {
    return Axios.get('/stocks')
}

let getStock = (id) => {
    return Axios.get('/stocks/' + id)
}

export const stocksService = {
    getAllStock, getStock
}