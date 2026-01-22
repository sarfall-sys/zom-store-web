import ApiService from "./ApiService";

const catalogService = {
    async getMenu() {
        return await ApiService.get(`/menu`);
    },

    async getSearch(searchTerm) {
        return await ApiService.get(`/search?term=${encodeURIComponent(searchTerm)}`);
    },
    async searchProducts(query) {
        return await ApiService.get(`/products/search?q=${encodeURIComponent(query)}`);
    },
    async getFilters() {
        return await ApiService.get(`/filters`);
    }
}

export default catalogService;