import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import withAuthRedirect from '../hoc/withAuthRedirect';


function mapStateToProps(state){
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};
function mapDispatchToProps(dispatch){
    return {
        updateNewMessageBody: (body) =>{
            dispatch (updateNewMessageBodyActionCreator(body));
        },
        sendMessage: () =>{
            dispatch (sendMessageActionCreator());
        }
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs);

