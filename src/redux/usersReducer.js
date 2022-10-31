const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

let initialState = {
    users: [
        // { id: 1, photoUrl:'https://damion.club/uploads/posts/2022-03/1646980611_1-damion-club-p-portreti-devushek-krasivie-foto-1.jpg',
        //     followed: true, fullName: 'Valero', status: 'Big boss', location:{city:'Minsk', country:'Belarus'} },
        // { id: 2, photoUrl:'https://images.pexels.com/photos/14043926/pexels-photo-14043926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        //     followed: false,fullName: 'Valeria', status: 'Pretty woman', location:{city:'Warszava', country:'Rzecz Pospolita'} },
        // { id: 3, photoUrl:'https://images.pexels.com/photos/14059376/pexels-photo-14059376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        //     followed: true,fullName: 'Victotia', status: 'Sexy girl', location:{city:'Berlin', country:'Germany'} },
        // { id: 4, photoUrl:'https://images.pexels.com/photos/13188542/pexels-photo-13188542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        //     followed: false,fullName: 'Verginia', status: 'Sweet chika', location:{city:'Budapest', country:'Hungary'} },
    ],
};

function usersReducer(state = initialState, action) {

    switch (action.type) {
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(u =>{
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u =>{
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
                return {...state, users: [...state.users, ...action.users]}
            };
        default:
            return state;
    }
}

export function followAC (userId) {
    return {
        type: FOLLOW, userId
    }
};
export function unfollowAC (userId) {
    return {
        type: UNFOLLOW, userId
    }
};
export function setUsersAC (users) {
    return {
        type: SET_USERS, users
    }
};

export default usersReducer;