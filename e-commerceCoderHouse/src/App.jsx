import React from "react";
import {
	Box,
	Text,
	Card,
	CardHeader,
	CardBody,
	Heading,
	Stack,
	StackDivider,
} from "@chakra-ui/react";
import CardItem from "./components/CardItem";
import CardItemJson from "./data/products.json";
import PageWrapper from "./components/PageWrapper";
import "./App.css";
const App = () => {
	let products = CardItemJson;
	return (
		<PageWrapper>
			{products.map((product) => (
				<CardItem key= {product.idProduct}></CardItem>
			))}
		</PageWrapper>
	);
};

export default App;
