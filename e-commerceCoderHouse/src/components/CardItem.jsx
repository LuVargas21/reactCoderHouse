import React, { useState } from "react";
import {
	Card,
	CardBody,
	Image,
	Stack,
	Heading,
	Text,
	ButtonGroup,
	Button,
	CardFooter,
	Divider,
} from "@chakra-ui/react";
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
			<Card className="item" maxW="sm" key={product.id}>
				<CardBody>
					<Image src={product.image} alt={product.product} borderRadius="lg" />
					<Stack mt="6" spacing="3">
						<Heading size="md"> {product.product}</Heading>
						<Text>{product.description}</Text>
						<Text color="#FF56A7" fontSize="2xl" className="price">
							${product.price}
						</Text>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter className="info-product">
					<ButtonGroup spacing="2">
						<Button variant="solid" colorScheme="pink" className="btn-add-cart">
							Añadir al carrito
						</Button>
						<Button
							variant="solid"
							colorScheme="pink"
							className="btn-add-cart"
							onClick={decrementCount}
						>
							{" "}
							-
						</Button>
						<Button
							variant="solid"
							colorScheme="pink"
							className="btn-add-cart"
							onClick={incrementCount}
						>
							+
						</Button>
						<input
							className="count-products-card"
							width="auto"
							type="number"
							value={count}
							min="0"
							max="10"
						/>
					</ButtonGroup>
				</CardFooter>
				<Link to={"/ProductDetail/" + product.id}>Ver en detalle </Link>
			</Card>
		</div>
	);
}

export default CardItem;
