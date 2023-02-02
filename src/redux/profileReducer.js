import {usersAPI, profileAPI} from "../components/api/api" ;
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: '25' },
        { id: 2, message:'I am fine, thank you, and you?', likesCount: '7' },
        { id: 3, message:'Its my first post!', likesCount: '12' },
        { id: 4, message:'I congratulate you and wish you all the best!', likesCount: '14' }
    ],
    newPostText: "Hey, Bro! create new post",
    profile: null,
    status: ""
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            let newPosts = {
               id: 55,
               message: state.newPostText,
               likesCount: 552
            };
            return {
               ...state,
               posts: [...state.posts, newPosts],
               newPostText: ''
            };
         };
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };
        };
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            };
        };
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }    
        default:
            return state;
    }
}

export function addPostActionCreator() {
    return {
        type: ADD_POST
    }
};
export function updateNewPostTextActionCreator(text) {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};
export function setUserProfile(profile) {
    return { 
        type: SET_USER_PROFILE, profile
    }
};
export function setStatus(status)  {
    return { 
        type: SET_STATUS, status
    }
}
export function getUserProfile (userId) {
    return (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile (response.data));
    });
};
};
export function getStatus (userId) {
    return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus (response.data));
    });
};
};
export function updateStatus (status) {
    return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
        dispatch(setStatus (status));
    };
});
}};
export default profileReducer;