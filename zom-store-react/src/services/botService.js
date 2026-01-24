import ApiService from "./ApiService";

const botService = {
    async sendState(state) {
        return await ApiService.post(`/bot`, state);
    }
}

export default botService;
