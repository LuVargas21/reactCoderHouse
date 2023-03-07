import {
	Card,
	Stack,
	Image,
	CardBody,
	Heading,
	Text,
	Button,
	CardFooter,
} from "@chakra-ui/react";
import React from "react";

function ItemDetail (props) {
	
	return (
		<div>
			<Card 
				direction={{ base: "column", sm: "row" }}
				overflow="hidden"
				variant="outline"
			>
				<Image
					objectFit="cover"
					maxW={{ base: "100%", sm: "200px" }}
					src= ""
					alt="Caffe Latte"
				/>

				<Stack>
					<CardBody>
						<Heading size="md"></Heading>

						<Text py="2"></Text>
						<Text py="2"></Text>
					</CardBody>

					<CardFooter>
						<Button variant="solid" colorScheme="blue">
							Añadir al carrito
						</Button>
					</CardFooter>
				</Stack>
			</Card>
		</div>
	);
};

export default ItemDetail;
