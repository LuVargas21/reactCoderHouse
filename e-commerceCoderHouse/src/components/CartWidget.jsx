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
			<img
				src="../src/assets/othersImg/cart.png"
				width="40"
				alt="Cart"
			/>
			<h2>{quantity}</h2>
		</div>
	);
};

export default CartWidget;
