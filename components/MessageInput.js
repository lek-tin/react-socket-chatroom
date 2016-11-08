import React from "react";

const MessageInput = React.createClass({

	// getInitialState() {
	// 	return {
	// 		userId: 'xxxxxxxxxxxxxxxxxx',
	// 		timestamp: new Data(),
	// 		message: this.refs.inputBox
	// 	};
	// },

	_handleSend(e) {
		console.log(this.refs.inputBox);
	},

    render() {
        return ( 
        	<div class="message--input">
        		<input type="text" ref="inputBox" name="MessageInput" id="MessageInput" />
        		<button ref="sendButton" onSubmit={ this._handleSend } class="btn waves-effect waves-light" type="submit" name="action">
					<i class="material-icons right">Send</i>
				</button>	
        	</div>
        )
    }
});

export default MessageInput;
