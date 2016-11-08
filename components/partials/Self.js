import React from "react";

const Self = React.createClass({

	propTypes: {
		user: React.PropTypes.string.isRequired
	},

	getDefaultProps() {
		return {
			status: 'disconnected',
			signature: 'loading...'
		}
	},
	
	render() {
		return (
			<header class="row">
				<div class="col s4">
					<img src="images/avatar.png" alt="Avatar"/>
				</div>
				<div class="col s8">
					<div>
						<p>{ this.props.user }</p>
					</div>
					<div>
						<div>{ this.props.status.toUpperCase() }</div>
						<div id="connection-status" class={ this.props.status }></div>
					</div>
				</div>
				<div class="col s12">
					Status: { this.props.signature }
				</div>
			</header>
		)
	}
});

export default Self;