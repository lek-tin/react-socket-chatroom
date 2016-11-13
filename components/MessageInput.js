import React from "react";

const MessageInput = React.createClass({

	// getInitialState() {
	// 	return {
	// 		userId: 'xxxxxxxxxxxxxxxxxx',
	// 		timestamp: new Data(),
	// 		message: this.refs.inputBox
	// 	};
	// },

	_handleSend() {
		this.props._handleNewMessage(this.refs.inputBox.value);
	},

    render() {
        return ( 
        	<div class="message--input">
        		<input type="text" ref="inputBox" name="MessageInput" />
        		<button ref="sendButton" onClick={ this._handleSend } class="btn waves-effect waves-light" type="submit" name="action">
					<i class="material-icons right">Send</i>
				</button>	
        	</div>
        )
    }
});

export default MessageInput;
