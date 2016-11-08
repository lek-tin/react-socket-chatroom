import React from "react";

const MessagesHistory = React.createClass({

	getInitialState() {
		return {
            userId: 'aadsadasd',
            userName: 'Jack',
            message: 'How is everyone'
		} ;
	},

    render() {
        return ( 
            <div class="">
                <div class="message message__in">
                    <span class="message--user">User: </span>
                    <span class="message--single">aldladapapodao</span>
                </div>
            	<div class="message message__out">
                    <span class="message--user">User: </span>
            		<span class="message--single">aldladapdaopdkpadkapdkapodkapodao</span>
            	</div>
            </div>
        )
    }
});

export default MessagesHistory;
