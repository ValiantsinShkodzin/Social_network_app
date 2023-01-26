import React from 'react';

class ProfileStatus extends React.Component {
    //локальный state компоненты
    state = {
        editMode: true
    }
    activateEditMode() {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        });
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
                        <input autoFocus onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status} />
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;