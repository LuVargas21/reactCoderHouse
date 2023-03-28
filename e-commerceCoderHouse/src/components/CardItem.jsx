import { useContext } from "react";
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
	useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { cartContext } from "../context/StateCart";

function CardItem(props) {
	const product = props.product;
	const toast = useToast();

	const {
		allProducts,
		setAllProducts,
		countProducts,
		setCountProducts,
		total,
		setTotal,
	} = useContext(cartContext);

	const onAddProduct = (product) => {
		toast({
			title: "Producto añadido al carrito",
			variant: "subtle",
			status: "success",
			duration: 3000,
			isClosable: true,
		});
		if (allProducts.find((item) => item.id === product.id)) {
			const products = allProducts.map((item) =>
				item.id === product.id
					? { ...item, quantityDefect: item.quantityDefect + 1 }
					: item
			);
			setTotal(total + product.price * product.quantityDefect);
			setCountProducts(countProducts + product.quantityDefect);
			return setAllProducts([...products]);
		}
		setTotal(total + product.price * product.quantityDefect);
		setCountProducts(countProducts + product.quantityDefect);
		setAllProducts([...allProducts, product]);
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
					<ButtonGroup
						spacing="2"
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<Button
							onClick={() => onAddProduct(product)}
							variant="solid"
							colorScheme="pink"
							className="btn-add-cart"
						>
							Añadir al carrito
						</Button>
					</ButtonGroup>
				</CardFooter>
				<Link to={"/ProductDetail/" + product.id}>
					{" "}
					<p className="text-nav">Ver en detalle </p>
				</Link>
			</Card>
		</div>
	);
}

export default CardItem;
