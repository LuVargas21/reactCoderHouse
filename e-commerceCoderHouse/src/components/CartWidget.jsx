import React from "react";
import { useState } from "react";

const CartWidget = () => {
	const [quantity, setQuantity] = useState(0);
	const addItem = () => {
		setQuantity(quantity + 1);
	};
	const substractItem = () => {
		setQuantity(quantity - 1);
	};
	const removeItem = () => {
		setQuantity(0);
	};
	return (
		<div>
			<span className="material-symbols-outlined">shopping_cart</span>
			<h2>{quantity}</h2>
			
		</div>
	);
};

export default CartWidget;
