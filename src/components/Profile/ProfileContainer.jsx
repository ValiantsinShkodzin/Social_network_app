import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getUserProfile} from '../../redux/profileReducer';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter (Component) {
    function WithUrlDataContainerComponent(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (<Component {...props} router = {{location, navigate, params}}/>);
    };
    return WithUrlDataContainerComponent;
}

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
       this.props.getUserProfile(userId);
    }

    render() { 
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});


export default compose(
    connect (mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect
    )(ProfileContainer);

