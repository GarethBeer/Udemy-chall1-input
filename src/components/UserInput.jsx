import React from "react";

const UserInput = props => {
	const { change, name } = props;

	const inputcontainer = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		margin: "50px auto",
		border: "2px solid black",
		width: "60%",
		background: "lightBlue",
		boxShadow: "5px 5px 10px"
	};

	const input = {
		height: "15px",
		paddingLeft: "5px",
		borderRadius: "10px"
	};
	return (
		<div style={inputcontainer}>
			<h6>Please enter a new username:</h6>
			<input type="text" onChange={change} value={name} style={input} />
		</div>
	);
};

export default UserInput;
