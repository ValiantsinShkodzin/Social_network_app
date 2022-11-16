import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "24ed1fd0-cf58-47f5-b743-3a6a73dee493"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    }
}



export function getUsers2 (currentPage = 1, pageSize = 10) {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data;
    });
}
