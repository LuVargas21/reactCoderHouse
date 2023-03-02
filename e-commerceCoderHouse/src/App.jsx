import React from "react";
import { Box } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CardItem from "./components/CardItem";
import CardItemJson from "./data/products.json";
import PageWrapper from "./components/PageWrapper";
import WelcomeGreeting from "./components/Greeting";
import Slider from "./components/Slider";
import "./App.css";
import Category from "./components/Category";

const App = () => {
	let products = CardItemJson;
	return (
		<div>
			<NavBar />
			<WelcomeGreeting />
			<Slider></Slider>
			<Category></Category>
			<PageWrapper>
				<Box h="7vh" >
					<h1>Productos destacados</h1>
				</Box>
				{products.map((product) => (
					<CardItem key={product.id}></CardItem>
				))}
			</PageWrapper>
		</div>
	);
};

export default App;
