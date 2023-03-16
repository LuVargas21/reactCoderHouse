import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import WelcomeGreeting from "./components/Greeting";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ProductDetailContainer from "./components/ProductDetailContainer";
import AboutUs from "./components/AboutUs";
import StateCounter from "./context/StateCounter";
import StateCart from "./context/StateCart";

const App = () => {
	return (
		<div>
			<StateCart>
				<NavBar />
				<WelcomeGreeting />

				<StateCounter>
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route
							exact
							path="/catalogue/:filter"
							element={<ItemListContainer />}
						/>
						<Route
							exact
							path="/mascotas/:filter"
							element={<ItemListContainer />}
						/>
						<Route
							exact
							path="/productDetail/:id"
							element={<ProductDetailContainer />}
						/>

						<Route exact path="/aboutus" element={<AboutUs />} />
					</Routes>{" "}
				</StateCounter>
			</StateCart>
			<Footer />
		</div>
	);
};

export default App;
