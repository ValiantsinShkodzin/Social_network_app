import React from 'react';

class ProfileStatus extends React.Component {
    //локальный state компоненты
    state = {
        editMode: true,
        status: this.props.status
    }
    activateEditMode() {
        this.setState({
            editMode: true
        });
    }
    deActivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {

        this.setState(
            { status: e.currentTarget.value }
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.status !== this.props.status) {

            this.setState(
                { status: this.props.status }
            )
        }

    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.deActivateEditMode} onChange={this.onStatusChange} value={this.state.status} />
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;