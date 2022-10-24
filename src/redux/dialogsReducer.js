const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: 'Helga' },
        { id: 2, name: 'Oksana' },
        { id: 3, name: 'Viktoria' },
        { id: 4, name: 'Kate' }
    ],
    messages: [
        { id: 1, message: 'Hello, dear friend!' },
        { id: 2, message: 'Hi,  girl! Can you do some things for me?' },
        { id: 3, message: 'Oh, yes, boy, of course!' },
        { id: 4, message: 'Send me two cheesecakes and pancakes, please:)!' }
    ],
    newMessageBody: " "
};

function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            state.messages.push({ id: 6, message: body });
            state.newMessageBody = " ";
            return state;
        default:
            return state;
    }
}

export function sendMessageActionCreator() {
    return {
        type: SEND_MESSAGE
    }
};
export function updateNewMessageBodyActionCreator(body) {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};


export default dialogsReducer;