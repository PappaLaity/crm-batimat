import axios from "axios";
import {accountService} from "@/_services/account.service";
import router from "@/router";

const Axios = axios.create({
        baseURL: 'http://api-crm.local/api/v1'
    })
;

Axios.interceptors.request.use(request => {
    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }
    return request
})

Axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status === 401) {
        accountService.logout()
        router.push('/login')
    }
})

export default Axios