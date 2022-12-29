import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if ( !props.isAuth ) {
            return <Navigate replace to='/login'/>
        }
        return <Component {...props}/>
    }

    const mapStateToPropsForRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth,
        };
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

export default withAuthRedirect;