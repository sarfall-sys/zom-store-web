import ApiService from "./ApiService";
const brandService = {
    async getBrands() {
        return await ApiService.get('/brands');
    },
    async createBrand(brandData) {
        return await ApiService.post('/brands', brandData);
    },
    async updateBrand(brandId, brandData) {
        return await ApiService.put(`/brands/${brandId}`, brandData);
    },
    async deleteBrand(brandId) {
        return await ApiService.delete(`/brands/${brandId}`);
    },
    async getBrand(brandId) {
        return await ApiService.get(`/brands/${brandId}`)
    }
}

export default brandService