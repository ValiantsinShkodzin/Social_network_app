import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


function mapStateToProps(state){
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
function mapDispatchToProps(dispatch){
    return {
        updateNewPostText: (text) =>{
            let action = updateNewPostTextActionCreator(text);
            dispatch (action);
        },
        addPost: () =>{
            dispatch (addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;


