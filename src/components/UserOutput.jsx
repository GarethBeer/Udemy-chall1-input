import React from "react";

const UserOutput = props => {
	const { username } = props;
	return (
		<div className="App">
			<p>Your new username is:</p>
			<h5>{username}</h5>
		</div>
	);
};

export default UserOutput;
