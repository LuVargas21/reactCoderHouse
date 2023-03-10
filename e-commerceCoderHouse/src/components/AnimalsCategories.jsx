import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";

const AnimalsCategories = ({ animal }) => {
	const [animal, setAnimal] = useState({});
	useEffect(() => {
		fetch("/src/data/products.json")
			.then((response) => response.json())
			.then((data) => {
				const productData = data.find((product) => product.animal === animal);
				setProduct(productData);
			});
	}, []);

	return (
		<div>
			<CardItem></CardItem>
		</div>
	);
};

export default AnimalsCategories;
