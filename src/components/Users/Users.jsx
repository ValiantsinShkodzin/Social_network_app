import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../img/userPhoto.png'
import { NavLink } from 'react-router-dom';

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div className={classes.numerPages}>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage} key={p}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto}alt="img not found"></img>
                            </NavLink>
                        </div>
                        <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {props.follow(u.id)}}>FOLLOW</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
        }
    </div>
};
export default Users;