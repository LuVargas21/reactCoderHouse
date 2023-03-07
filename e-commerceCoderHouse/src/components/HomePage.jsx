import React from "react";
import { Box } from "@chakra-ui/react";
import ProductsHome from "./ProductsHome";
import Slider from "./Slider";
const HomePage = (props) => {
	return (
		<div>
			<Slider />
			<Box h="7vh">
				<br />
				<h1>Productos destacados</h1>
			</Box>
			{props.children}
			<ProductsHome/>
		</div>
	);
};

export default HomePage;
