import axios from "axios";
import config from "./network.config";

export const public_instance = axios.create({
    baseURL: config.baseUrl,
})