import ApiService from "./ApiService";

const productService = {

    async getProduct(id) {

        return await ApiService.get(`/products/${id}`)
    },

    async getProducts() {

        return await ApiService.get(`/products`)
    },
    async createProduct(data) {
        return await ApiService.post('/products', data);
    },

    async updateProduct(id, data) {

        return await ApiService.put(`/products/${id}`, data);
    },

    async deleteProduct(id) {

        return await ApiService.delete(`/products/${id}`)
    },

    //Catalog
    async getProducts(slug, filters) {
        return await ApiService.get(`/catalog/${slug}`, { params: filters });
    }
    ,
    async getProductsOnSale() {
        return await ApiService.get('/on-sale');
    },
    async getLatestProducts() {
        return await ApiService.get('/latest');
    },
    async getProductDetail(slug) {
        return await ApiService.get(`/products/${slug}`);
    }

}

export default productService;
