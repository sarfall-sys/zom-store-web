import ApiService from "./apiService";

const botService = {
    async sendState({state,message}) {
       return await ApiService.post("/chatbot", { state, message });

    }
}

export default botService;
