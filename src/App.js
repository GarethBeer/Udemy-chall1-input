import React from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<UserInput />
			<UserOutput />
		</div>
	);
};

export default App;
