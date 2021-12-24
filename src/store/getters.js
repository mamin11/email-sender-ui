// import Vue from "vue";

export const getTotalOrders = (state) => {
    return state.total_orders;
}

export const getEmailsSent = (state) => {
    return state.emails_sent;
}

export const getSendNotificationResponse = (state) => {
    return state.send_notification_response
}