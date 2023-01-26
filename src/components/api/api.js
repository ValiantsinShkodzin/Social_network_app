import axios from "axios";

const instance = axios.create( {
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {'API-KEY': 'b0a6af53-c620-4ce5-ab01-6ca088846bd8'}
} )

export const usersAPI = {

   getUsers(currentPage=1, pageSize=10) {

      return instance.get( `users?page=${currentPage}&count=${pageSize}` )
         .then( response => response.data )

   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`)
   },
  getProfile(userId) {
      return instance.get(`profile/${userId}`)
   }

}

export const authAPI = {
   me(){
    return instance.get(`auth/me`)
}
}

