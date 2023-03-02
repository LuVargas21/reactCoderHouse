import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Box } from "@chakra-ui/react";

function CardItem(props) {
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
			<Row xs={1} md={4} className="g-4">
				{Array.from({ length: 4 }).map((_, id) => (
					<Col>
						<Card >
							<Card.Img
								variant="top"
								src="./public/img/pet1.webp
            "
							/>
							<Card.Body>
								<Card.Title>Producto</Card.Title>
								<Card.Text>Descripcion del producto</Card.Text>
								<div>
									<Button onClick={decrementCount}>-</Button>
									<input type="number" value={count} min="0" max="10" />
									<Button onClick={incrementCount}>+</Button>
								</div>
								;
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
}

export default CardItem;
