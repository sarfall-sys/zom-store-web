import ApiService from "./ApiService";

const botService = {
    async sendState({message: userMessage}) {
        return await ApiService.post(`/chatbot`, { message: userMessage });
    }
}

export default botService;
