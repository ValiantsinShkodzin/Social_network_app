import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



function MyPosts(props) {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    let newPostElement = React.createRef();

    function onAddPost() {
        props.addPost();
    }

    function onPostChange() {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={onAddPost}>Add</button>
                <button>Remove</button>
            </div>
            <div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;


