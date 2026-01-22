import ApiService from "./ApiService";

const userService = {
    async getUser(id) {

        return await ApiService.get(`/users/${id}`);
    },
    async getUsers() {
        return await ApiService.get(`/users`);
    },
    async createUser(data) {
        return await ApiService.post(`/users`, data);

    },
    async editUser(id, data) {
        return await ApiService.put(`/users/${id}`, data);

    },
    async deleteUser(id) {
        return await ApiService.delete(`/users/${id}`);
    }
}

export default userService 