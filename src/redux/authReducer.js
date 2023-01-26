import {authAPI} from "../components/api/api" ;
const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    id: null,
    email:null,
    login:null,
    isAuth: false
};

function authReducer(state = initialState, action) {

    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
}

export function setAuthUserData (id, email, login) {
    return {
        type: SET_USER_DATA, data:{id, email, login}
    }
};
export function getAuthUserData () {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch (getAuthUserData(id, email, login))
        }
      });
    }
}


export default authReducer;