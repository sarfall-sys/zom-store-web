import ApiService from "./ApiService";

const subcategoryService = {

    async getSubcategory(id) {
        return await ApiService.get(`/subcategories/${id}`)

    },

    async getSubcategories() {
        return await ApiService.get(`/subcategories`)

    },

    async createSubcategory(data) {
        return await ApiService.get(`/subcategories`, data)

    },
    async updateSubcategory(id, data) {
        return await ApiService.put(`/subcategories/${id}`, data)

    },

    async deleteSubcategory(id) {
        return await ApiService.delete(`/subcategories/${id}`)

    }
}
export default subcategoryService;