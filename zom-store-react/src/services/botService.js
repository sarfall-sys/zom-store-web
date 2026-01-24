import ApiService from "./ApiService";

const botService = {
    async sendState({message}) {
        return await ApiService.post(`/chatbot`, { message });
    }
}

export default botService;
