import {usersAPI} from "../components/api/api" ;
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [ ],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching: true,
    followingInProgress:[ ]
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
                return {...state, users: action.users}
            };
        case SET_CURRENT_PAGE: {
                return {...state, currentPage:action.currentPage}
            };
        case SET_TOTAL_USERS_COUNT: {
                return {...state, totalUsersCount:action.count}
            };
        case TOGGLE_IS_FETCHING: {
                return {...state, isFetching:action.isFetching}
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
                return {...state, 
                    followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id != action.userId)]}; 
        }; 
        default:
            return state;
    }
}

export function followSuccess (userId) {
    return {
        type: FOLLOW, userId
    }
};
export function unfollowSuccess (userId) {
    return {
        type: UNFOLLOW, userId
    }
};
export function setUsers (users) {
    return {
        type: SET_USERS, users
    }
};
export function setCurrentPage (currentPage) {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
};
export function setTotalUsersCount (totalUsersCount) {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}
export function toggleIsFetching (isFetching) {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}
export function toggleFollowingProgress (isFetching, userId) {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
    }
}

export function getUsers (currentPage, pageSize) {
    return (dispatch) => {
        dispatch (toggleIsFetching(true));
    
            usersAPI.getUsers(currentPage, pageSize).then(data=> { 
                dispatch (toggleIsFetching(false));
                dispatch (setUsers(data.items));
                dispatch (setTotalUsersCount(data.totalCount));
                });
    }
} 
export function follow (userId) {
    return (dispatch) => {
        dispatch(toggleFollowingProgress (true, userId));
            usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId));
                }
            dispatch(toggleFollowingProgress (false, userId)); 
        });
    }
}

export function unfollow (userId) {
    return (dispatch) => {
        dispatch(toggleFollowingProgress (true, userId));
            usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId));
                }
            dispatch(toggleFollowingProgress (false, userId)); 
        });
    }
}
export default usersReducer;