import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductDetail = (props) => {
	const product = props.product;

	const [count, setCount] = useState(0);

	const incrementCount = () => {
		if (count < 10) {
			setCount(count + 1);
		}
	};

	const decrementCount = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

  return (
	<div>
	  




	</div>
  )
}

export default ProductDetail
