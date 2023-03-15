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


const App = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
	return (
		<div>
			<NavBar />
			<WelcomeGreeting />

			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route
					exact
					path="/catalogue/:filter"
					element={<ItemListContainer 

					
					/>}
				/>
				<Route exact path="/mascotas/:filter" element={<ItemListContainer />} />
				<Route
					exact
					path="/productDetail/:id"
					element={<ProductDetailContainer />}
				/>
				<Route exact path="/aboutus" element={<AboutUs />} />
			</Routes>

		¿
				
			<Footer />
		</div>
	);
};

export default App;
