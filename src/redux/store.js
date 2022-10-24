import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: '25' },
                { id: 2, message: 'Its my first post!', likesCount: '7' },
                { id: 3, message: 'Hi, how are you?', likesCount: '25' },
                { id: 4, message: 'Its my first post!', likesCount: '7' }
            ],
            newPostText: "Hey, Bro! create new post"
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Helga' },
                { id: 2, name: 'Oksana' },
                { id: 3, name: 'Viktoria' },
                { id: 4, name: 'Kate' }
            ],
            messages: [
                { id: 1, message: 'Hello, dear friend!' },
                { id: 2, message: 'Hi,  girl! Can you make for me some things?' },
                { id: 3, message: 'Oh, yes, boy, of course!' },
                { id: 4, message: 'Poshla nahyi!' }
            ],
            newMessageBody: " "
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer (this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;

