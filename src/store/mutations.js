// import Vue from "vue";

export const SET_TOTAL_ORDERS = (state, payload) => {
    state.total_orders = payload
}

export const SET_EMAILS_SENT = (state, payload) => {
    state.emails_sent = payload
}

export const SEND_NOTIFICATIONS_RESULT = (state, payload) => {
    state.send_notification_response = payload
}