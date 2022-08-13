import React,{ useState } from "react";
import Light from "./light";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const colors= ["red","yellow","green"];
	const [lit, setLit] = useState("red");
	//const [box, setBox] = useState("none");
	return (
		<div className="App">
			{colors.map((color)=>{
				return <Light color={color} lit={lit} setLit={setLit} /* boxShadow={box} *//>	
					}
				)
			}
		</div>
	);
};

export default Home;
