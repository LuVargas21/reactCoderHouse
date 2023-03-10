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
	Divider
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
			<Card maxW="sm" key={product.id}>
				<CardBody>
					<Image src={product.image} alt={product.product} borderRadius="lg" />
					<Stack mt="6" spacing="3">
						<Heading size="md"> {product.product}</Heading>
						<Text>{product.description}</Text>
						<Text color="#FF56A7" fontSize="2xl">
							${product.price}
						</Text>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter>
					<ButtonGroup spacing="2">
						<Button variant="solid" colorScheme="pink">
							Añadir al carrito
						</Button>
						<Button
							colorScheme="pink"
							variant="outline"
							onClick={decrementCount}
						>
							{" "}
							-
						</Button>
						<Button
							colorScheme="pink"
							variant="outline"
							onClick={incrementCount}
						>
							+
						</Button>
					</ButtonGroup>
					<input width="auto" type="number" value={count} min="0" max="10" />
				</CardFooter>
				<Link to={"/ProductDetail/" + product.id}>
					Ver en detalle{" "}
				</Link>
			</Card>
		</div>
	);
}

export default CardItem;
