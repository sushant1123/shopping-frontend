import React from "react";

import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";

import "./home.styles.js";

const Home = () => {
	return (
		<>
			<Announcement />
			<Navbar />
			<Slider />
		</>
	);
};

export default Home;
