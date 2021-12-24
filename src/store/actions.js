import axios from "axios";

export const setTotalOrders = async ({commit}, payload) => {
    try {
        const res = await axios.get("http://localhost:8081/api/v1/orders/count", payload, {
            header: {
                "Content-Type": "multipart/form-data",
                "Accept": "*/*"
            }
        })
        commit('SET_TOTAL_ORDERS', res.data.response.total)
    } catch (error) {
        console.log(error)
    }
}

export const setEmailsSent = async ({commit}, payload) => {
    try {
        const res = await axios.get("http://localhost:8081/api/v1/orders/email-sent", payload, {
            header: {
                "Content-Type": "multipart/form-data",
                "Accept": "*/*"
            }
        })
        commit('SET_EMAILS_SENT', res.data.response.total)
    } catch (error) {
        console.log(error)
    }
}

export const launchTask = async ({commit}, payload) => {
    try {
        const res = await axios.post("http://localhost:8081/api/v1/orders/send/notification", payload, {
            header: {
                "Content-Type": "multipart/form-data",
                "Accept": "*/*"
            }
        })
        console.log(res.data);
        commit('SEND_NOTIFICATIONS_RESULT', res.data.message)
    } catch (error) {
        console.log(error)
    }
}