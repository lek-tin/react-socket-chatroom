import React from "react";
import io from "socket.io-client";

import Self from "./partials/Self";
import Users from "./partials/Users";
import Dialog from "./Dialog";

const APP = React.createClass({
    
    getInitialState() {
        return {
            status: 'disconnected',
            userId: '',
            userName: ''      
        }
    },

    componentWillMount() {
        this.socket = io('http://localhost:8888');    
        this.socket.on('connect', this._connect);
        this.socket.on('disconnect', this._disconnect);
        this.socket.on('welcome', this._welcome);
        this.socket.on('broadcast', this._broadcast);
    },

    _connect() {
        console.log("Conneted: " + this.socket.id);
        this.setState({ status: 'connected' });
    },

    _disconnect() {
        console.log("Disconnected: " + this.socket.id);
        this.setState({ status: 'disconnected' });
    },

    _welcome(serverState) {
        console.dir(serverState);
        // this.setState({ user: serverState.user, signature: serverState.signature });
    },

    _broadcast(serverState) {
        console.dir(serverState);
        // this.setState({ user: serverState.user, signature: serverState.signature });
    },

    render() {
        return (
            <div class="row">
                <div class="col s4">
                    <Self {...this.state} />
                    <Users />
                </div>
                <div class="col s8">
                    <Dialog />
                </div>
            </div>
        );
    }
});

export default APP;