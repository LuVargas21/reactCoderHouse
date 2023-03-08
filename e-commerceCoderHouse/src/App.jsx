import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CardItemJson from "./data/products.json";
import HomePage from "./components/HomePage";
import WelcomeGreeting from "./components/Greeting";
import CategoryMenu from "./components/CategoryMenu";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
	let products = CardItemJson;
	return (
		<div>
			<NavBar />
			<WelcomeGreeting />
			<CategoryMenu />

			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route
					exact
					path="/catalogue/:categoryId"
					element={<ItemListContainer />}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
