import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

class ApiService {
    constructor() {
        this.client = axios.create({
            baseURL: API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 6000,
            withCredentials: true, // IMPORTANT for Sanctum cookies

        });
        this.csrfLoaded = false;

        this.setUpInterceptors();
    }

    //Sanctum csrf request

    async ensureCsrfToken() {
        if (this.csrfLoaded) return;

        await this.client.get("/sanctum/csrf-cookie");
        this.csrfLoaded = true;
    }

    //Set up request and response interceptors

    setUpInterceptors() {
        //Request interceptor for adding sanctum
        this.client.interceptors.request.use(

            async (config) => {

                // Only do CSRF for protected CMS endpoints
                const needsCsrf =
                    config.url.startsWith('/management') ||
                    config.url.startsWith('/admin') ||
                    config.url.startsWith('/user') ||
                    config.url.startsWith('/login') ||
                    config.url.startsWith('/logout');
                if (needsCsrf) {
                    await this.ensureCsrfToken();
                }

                return config;
            },
            (error) => {
                return Promise.reject(error);
            }

        );

        //Response interceptor for handling responses globally

        this.client.interceptors.response.use(

            //Response
            (response) => {
                return response.data;
            },
            //Error
            (error) => {

                const { response } = error;

                if (!response) {
                    console.log('Network error');
                    return Promise.reject(error);
                }

                switch (response.status) {
                    case 401:
                        console.warn('Unauthorized — session expired');
                        break;
                    case 403:
                        console.warn('Forbidden — insufficient permissions');
                        break;
                    case 404:
                        console.warn('Not Found');
                        break;
                    case 500:
                        console.warn('Server Error');
                        break;
                }

                //Handle errors globally (e.g., logging, notifications)
                return Promise.reject(error);

            }

        );

    }

    //API methods
    async get(url, config = {}) {
        const response = await this.client.get(url, config);
        return response.data;
    }

    async post(url, data, config = {}) {
        const response = await this.client.post(url, data, config);
        return response.data;
    }

    async put(url, data, config = {}) {
        const response = await this.client.put(url, data, config);
        return response.data;
    }

    async delete(url, config = {}) {
        const response = await this.client.delete(url, config);
        return response.data;
    }

    async catalog(url, config = {}){
        const response = await this.client.get(url, config);
        return response;
    }

}


export default new ApiService();