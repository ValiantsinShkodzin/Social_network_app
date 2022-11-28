import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getUserProfile} from '../../redux/profileReducer';



class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
       this.props.getUserProfile(userId);
    }

    componentDidUpdate(prevProps){
        let userId = this.props.router.params.userId;
        if (prevProps.router.params.userId !== userId) {
            let userId = 2;
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
    profile: state.profilePage.profile
});

function withRouter (Component) {
    function WithUrlDataContainerComponent(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (<Component {...props} router = {{location, navigate, params}}/>);
    };
    return WithUrlDataContainerComponent;
}
export default connect (mapStateToProps, {getUserProfile}) (withRouter(ProfileContainer));


