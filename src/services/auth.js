import api from './api';
export const doAthentication = (payload) => {
    console.log("Authentication API",payload);
    return api.post('auth/login', {email:payload.email,password:payload.password});        
}
export const getUser = () => {
    console.log("Get User API");
    return api.post('auth/profile');        
}