import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b0a6af53-c620-4ce5-ab01-6ca088846bd8"
    }
})

export const usersAPI = {
    async getUsers (currentPage = 1, pageSize = 10) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async authMe() {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
    async follow(userId) {
        const response = await instance.post(`follow/${userId}`);
        return response.data;
    },
    async unfollow(userId) {
        const response = await instance.delete(`follow/${userId}`);
        return response.data;
    },
    async getProfile(userId) {
        const response = await instance.get(`profile/${userId}`);
        return response.data;
    }
}

export const authAPI = {
    async me(){
        const response = await instance.get(`auth/me`);
        return response.data;}
}


