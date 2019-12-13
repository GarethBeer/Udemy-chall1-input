import React, { Component } from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

import "./App.css";

class App extends Component {
	state = {
		username: " Usr.Name"
	};

	handleOnChange = event => {
		console.log(event.target.value);
		this.setState({
			username: event.target.value
		});
	};

	render() {
		return (
			<div className="App">
				<UserInput change={this.handleOnChange} name={this.state.username} />
				<UserOutput username={this.state.username} />
			</div>
		);
	}
}

export default App;
