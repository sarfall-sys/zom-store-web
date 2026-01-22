import ApiService from "./ApiService";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const authService = {

    async login(credentials) {
        // 1. Load CSRF cookie (required by Sanctum)
         await axios.get(`${BASE_URL}/sanctum/csrf-cookie`, {
            withCredentials: true
        });

        //2.Login using session cookies
        return await ApiService.post("/login",credentials)
    },

    async logout() {
        return await ApiService.post("/logout");

    },
    async getUser() {

        return await ApiService.get(`/users`);

    },
    async getUsers() {
        return await ApiService.get('/users');
    }

}