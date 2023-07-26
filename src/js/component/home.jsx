import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";


const Home = () => {
	const [activeLight, setActiveLight] = useState("");
	return (
		<div className="container vh-100 w-50">
			<div className="container d-flex justify-content-center align-items-center">
				<div className="stick"></div>
			</div>
			<div className=" h-50 w-25 bg-dark m-auto d-flex flex-column justify-content-center align-items-center rounded">
				<div className={`lights red ${activeLight === "red" && "active-light"}`}
					onClick={() => setActiveLight("red")}
				></div>

				<div className={`lights yellow ${activeLight === "yellow" && "active-light"}`}
					onClick={() => setActiveLight("yellow")}
				></div>

				<div className={`lights green ${activeLight === "green" && "active-light"}`}
					onClick={() => setActiveLight("green")}
				></div>
			</div>
		</div>
	);
};

export default Home;
