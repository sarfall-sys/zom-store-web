import ApiService from "./ApiService";

const bannerService = {
    
    async getBanners() {
        return await ApiService.get('/banners');
    },
    async createBanner(bannerData) {
        return await ApiService.post('/banners', bannerData);
    },
    async updateBanner(bannerId, bannerData) {
        return await ApiService.put(`/banners/${bannerId}`, bannerData);
    },
    async deleteBanner(bannerId) {
        return await ApiService.delete(`/banners/${bannerId}`);
    }
}

export default bannerService;