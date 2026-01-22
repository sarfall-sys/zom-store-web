import ApiService from "./ApiService";

const categoryService = {

    async getCategory(id) {
        return await ApiService.get(`/categories/${id}`);
    },

    async getCategories() {
        return await ApiService.get(`/categories/`);

    },

    async createCategory(data) {
        return await ApiService.post(`/categories`, data);

    },
    async updateCategory(id, data) {
        return await ApiService.put(`/categories/${id}`, data);

    },

    async deleteCategory(id) {

        return await ApiService.delete(`/categories/${id}`);
    },

}
export default categoryService;