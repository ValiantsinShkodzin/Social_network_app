import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../../redux/profileReducer';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}
class ProfileContainer extends React.Component {
    redirectToMainUser() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 26923; //Пишем Ваш id
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
componentDidMount() {
        this.redirectToMainUser();
    }
componentDidUpdate(prevProps) {
        if (this.props.isMain !== prevProps.isMain) {
            if (this.props.isMain) {
                this.redirectToMainUser();
            }
        }
    }
render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}
// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile,
// });

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);


// function withRouter (Component) {
//     function WithUrlDataContainerComponent(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (<Component {...props} router = {{location, navigate, params}}/>);
//     };
//     return WithUrlDataContainerComponent;
// }
