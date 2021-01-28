
import axiosInstance from './Interceptor';
let config = { headers: { 'Content-Type': 'application/json' } }
let configToken = (token) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
}
const Api = {
    userLogin: function (userData) {
        return axiosInstance.post('rider/loginrider', {
            email: userData.email,
            password: userData.password
        }, config)
    },
    getRiderOrders: function (userData) {
        return axiosInstance.post('rider/getriderorders', {
            rider_id: userData.id
        }, configToken(userData.token))
    },
    getOrderDetails: function (userData) {
        return axiosInstance.get(`rider/riderorderdetail?id=${userData.order_id}&rider_id=${userData.rider_id}`)
    },
    riderOrderUpdate: function (userData) {
        return axiosInstance.put('rider/riderorderupdate', {
            id: userData.order_id,
            rider_id: userData.rider_id,
            orderStatus: userData.orderStatus
        }, config)
    },

};

export default Api;