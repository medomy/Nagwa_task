import axios from "axios";
import config from "./network.config";
// instance of axios 
export const public_instance = axios.create({
    baseURL: config.baseUrl,
})