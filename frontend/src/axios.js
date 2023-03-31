import axios from "axios";


export const makeRequest = axios.create({
    baseURL:"http://tycoonconnectapi.onrender.com",
    // "http://localhost:3001"
    withCredentials:true
})