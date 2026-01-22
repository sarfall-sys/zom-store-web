import ApiService from "./ApiService";

const subfamilyService = {
    
    async getSubfamily(id) {
        return await ApiService.get(`/subfamilies/${id}`)
    },

    async getSubfamilies() {
        return await ApiService.get(`/subfamilies`)
    },

    async createSubfamily(data) {
        return await ApiService.post(`/subfamilies/`,data)

    },
    async updateSubfamily(id, data) {
        return await ApiService.put(`/subfamilies/${id}`,data)

    },

    async deleteSubfamily(id) {
        return await ApiService.delete(`/subfamilies/${id}`)
    }
}
export default subfamilyService;