import React from "react";
import MessageInput from "./MessageInput";
import MessagesHistory from "./MessagesHistory";

const Dialog = React.createClass({

  getInitialState() {
    return null;
  },

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },

  _broadcastMessages() {
    
  },

  _handleNewMessage(val) {
    console.log(val);
  },

  render() {
    return (
      <div class="dialog">    
        <MessagesHistory _broadcastMessages={ this._broadcastMessages }/>      
    		<MessagesHistory _broadcastMessages={ this._broadcastMessages }/>      
      	<MessageInput _handleNewMessage={ this._handleNewMessage }/>
      </div>
    )
  }
});

export default Dialog;
