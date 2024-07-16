import Axios from "@/_services/caller.service";

let getAllproducts = () => {
    return Axios.get('/products')
}

let getProductForProvider = (idProvider) => {
    return Axios.get('/products/provider/' + idProvider)
}
let getProductForCompany = (idCompany) => {
    return Axios.get('/products/company/' + idCompany)
}

let addProduct = (credentials) => {
    return Axios.post('/products', credentials)
}
let updateProduct = (credentials) => {
    return Axios.put('/products/' + credentials.id, credentials)
}
let getProduct = (idProduct) => {
    return Axios.get('/products/' + idProduct)
}

export const productService = {
    getAllproducts, addProduct, updateProduct, getProduct, getProductForProvider, getProductForCompany
}