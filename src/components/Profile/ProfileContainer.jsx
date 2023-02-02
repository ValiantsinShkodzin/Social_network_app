import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import withAuthRedirect from '../hoc/withAuthRedirect';
import { getUserProfile, setUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 26492;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId;
        if (prevProps.router.params.userId !== userId) {
            let userId = 26492;
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(response => {
                    this.props.setUserProfile(response.data);
                });
        }
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status:state.profilePage.status
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
export default compose(
    connect(mapStateToProps, { getUserProfile, setUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);




