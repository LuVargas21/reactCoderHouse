import React, { useState, useEffect } from "react";
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

const ProductDetail = ({ id }) => {
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

	const [product, setProduct] = useState({});

	useEffect(() => {
		fetch("/src/data/products.json")
			.then((response) => response.json())
			.then((data) => {
				const productData = data.find((product) => product.id === id);
				setProduct(productData);
			});
	}, []);

	return (
		<div>
			<Card maxW="xl">
				<CardBody>
					<Image
						src={product.image}
						alt=""
						width="400"
						className="d-inline-block align-text-top"
						borderRadius="lg"
					/>
					<Stack mt="6" spacing="3">
						<Heading size="md">{product.product}</Heading>
						<Text>{product.description}</Text>
						<Text color="black" fontSize="2xl">
							Precio: ${product.price}
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
			</Card>


<div className="small-container single-product">
	<div className="row">
		<div className="col-2">
			<img src="" alt=""  width="100%" id="productImg"/>
			<div className="small-img-row">
				<div className="small-img-col"></div>
			</div>
		</div>

	</div>
	
</div>




		</div>

	);
};

export default ProductDetail;
