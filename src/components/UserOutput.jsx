import React from "react";

const UserOutput = props => {
	const { username } = props;
	return (
		<div className="App">
			<p>Username:</p>
			<p>{username}</p>
		</div>
	);
};

export default UserOutput;
