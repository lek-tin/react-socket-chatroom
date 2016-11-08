import React from "react";
import MessageInput from "./MessageInput";
import MessagesHistory from "./MessagesHistory";

const Dialog = React.createClass({

  render() {
    return (
      <div class="dialog">
    		<MessagesHistory />      
    		<MessagesHistory />      
    		<MessagesHistory />      
    		<MessagesHistory />      
    		<MessagesHistory />      
      	<MessageInput />
      </div>
    )
  }
});

export default Dialog;
