import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setUserProfile } from '../../redux/profileReducer';
import { Navigate } from 'react-router-dom';
import { getUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId;
        if (prevProps.router.params.userId !== userId) {
            let userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }
    }
    render() {
        if (!this.props.isAuth) return <Navigate to={"/login"}/>;
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

function withRouter(Component) {
    function WithUrlDataContainerComponent(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (<Component {...props} router={{ location, navigate, params }} />);
    };
    return WithUrlDataContainerComponent;
}
export default connect(mapStateToProps, {
    getUserProfile, setUserProfile
})(withRouter(ProfileContainer));




