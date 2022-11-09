import React from 'react';
import Profile from './ProfileInfo/Profile';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { render } from '@testing-library/react';

class ProfileContainer extends ReactComponent {
    render() {
        return (
            <div>
                <Profile {...this.props}/>
                <MyPostsContainer store={props.store} />
            </div>
        )
    }
}

export default ProfileContainer;


