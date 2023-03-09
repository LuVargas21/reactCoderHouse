import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CardItem(props) {
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
			<Link to="/cardDetail">
				<Card key={product.id}>
					<Card.Img variant="top" src={product.image} />
					<Card.Body>
						<Card.Title>{product.product}</Card.Title>
						<Card.Text>{product.description}</Card.Text>
						<Card.Title>{`$${product.price}`}</Card.Title>
						<Box>
							<Button onClick={decrementCount}>-</Button>
							<input type="number" value={count} min="0" max="10" />
							<Button onClick={incrementCount}>+</Button>
						</Box>
						<Button>Añadir al carrito</Button>
					</Card.Body>
				</Card>
			</Link>
		</div>
	);
}

export default CardItem;
