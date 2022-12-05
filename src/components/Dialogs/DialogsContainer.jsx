import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


function mapStateToProps(state){
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};
function mapDispatchToProps(dispatch){
    return {
        updateNewMessageBody: () =>{
            dispatch (sendMessageActionCreator());
        },
        sendMessage: (body) =>{
            dispatch (updateNewMessageBodyActionCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;


