import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer"
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware));


export default store;