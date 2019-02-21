export const BASE_URL = "http://localhost:8080";

// Login
export const AUTH__LOGIN = `${BASE_URL}/login`;

// Sign Up
export const AUTH__SIGN_UP = `${BASE_URL}/sign_up`;


// // List Events
// export const PUBLIC__LIST_EVENTS = `${BASE_URL}/events/limit/`;
// export const PUBLIC__EVENT_DETAIL = `${BASE_URL}/event/`

// //list account
export const ACCOUNT__GET_ALL_ACCOUNT = `${BASE_URL}/account`;

//GUEST
export const GUEST__LIST_EVENTS = (id, quantity) => { return BASE_URL + '/events/page/' + id + '/limit/' + quantity };
export const GUEST__EVENT_DETAIL = (id) => { return `${BASE_URL}/event/` + id };
