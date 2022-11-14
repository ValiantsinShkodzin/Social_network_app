const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userId: null,
    email:null,
    login:null,
    isFetching: true
};

function authReducer(state = initialState, action) {

    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.state
            };
            
        default:
            return state;
    }
}

export function setUserData (userId, email, login) {
    return {
        type: SET_USER_DATA, data:{userId, email, login}
    }
};


export default authReducer;