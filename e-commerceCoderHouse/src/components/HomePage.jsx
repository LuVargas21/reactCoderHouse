import React from "react";
import { Box } from "@chakra-ui/react";
import ProductsHome from "./ProductsHome";
import Slider from "./Slider";
import CategoryMenu from './CategoryMenu'
const HomePage = (props) => {
	return (
		<div>
			<CategoryMenu/>
			<Slider />
			<Box h="7vh">
				<br />
				<h1>Productos destacados del mes</h1>
			</Box>
			{props.children}
			<ProductsHome />
		</div>
	);
};

export default HomePage;
