const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: '25' },
        { id: 2, message:'I am fine, thank you, and you?', likesCount: '7' },
        { id: 3, message:'Its my first post!', likesCount: '12' },
        { id: 4, message:'I congratulate you and wish you all the best!', likesCount: '14' }
    ],
    newPostText: "Hey, Bro! create new post"
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 7
            };
            state.posts.push(newPost);
            state.newPostText = " ";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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
export default profileReducer;