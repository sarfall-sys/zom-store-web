import ApiService from "./ApiService";

const familyService = {

    async getFamily(id) {
        return await ApiService.get(`/families/${id}`)
    },
    async getFamilies() {
        return await ApiService.get(`/families}`)

    },

    async createFamily(data) {
        return await ApiService.post(`/families/`,data)
    },
    async updateFamily(id, data) {
        return await ApiService.put(`/families/${id}`,data)

    },

    async deleteFamily(id) {
        return await ApiService.delete(`/families/${id}`)

    }
}
export default familyService;