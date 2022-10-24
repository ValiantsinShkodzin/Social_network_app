import React from 'react';
import likesImg from '../../../../img/likesImg.png';
import avaPost from '../../../../img/avaPost.png';
import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.postItem}>
            <img className={classes.avaPost} src={avaPost} alt='avatar'></img>
            <p>{props.message}</p>
            <div><span><img className={classes.likesImg} src={likesImg} alt='likesImg'></img></span>{props.likesCount}</div>
        </div>
    )
}

export default Post;


