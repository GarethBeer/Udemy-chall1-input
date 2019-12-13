import React, { Component } from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

import "./App.css";

class App extends Component {
	state = {
		username: " Usr.Name"
	};
	render() {
		return (
			<div className="App">
				<UserInput />
				<UserOutput username={this.state.username} />
			</div>
		);
	}
}

export default App;
