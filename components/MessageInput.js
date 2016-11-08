import React from "react";

const MessageInput = React.createClass({

	getInitialState() {
		return {
			userId: 'xxxxxxxxxxxxxxxxxx',
			timestamp: new Data(),
			message: this.refs.inputBox
		};
	},

	_handleSend(e) {
		console.log(this.refs.inputBox.e.value);
	},

    render() {
        return ( 
        	<div>
        		<input type="text" onChange={ this._handleSend } ref="inputBox" name="MessageInput" id="MessageInput" />
        		<button class="btn waves-effect waves-light" type="submit" name="action">
					<i class="material-icons right">Send</i>
				</button>	
        	</div>
        )
    }
});

export default MessageInput;
