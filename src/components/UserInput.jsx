import React from "react";

const UserInput = props => {
	const { change, name } = props;

	return (
		<div className="App">
			<input type="text" onChange={change} value={name} />
		</div>
	);
};

export default UserInput;
