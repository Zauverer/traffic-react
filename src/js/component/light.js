import React from "react";

const Light = ({ color, lit, setLit, }) => {
	return (
		<div className="light" style={{ backgroundColor: color === lit? color:'grey'}}
        onClick={() => setLit(color)}>
			<div></div>
		</div>
	);
};

export default Light;