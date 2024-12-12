import axios from "axios";

const BASE_URL = 'http://localhost:7777';

export function useApi() {
    return axios.create({
        baseURL: BASE_URL,
    });
} 