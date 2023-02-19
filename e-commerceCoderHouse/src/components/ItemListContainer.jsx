import React from "react";
import { Box } from "@chakra-ui/react";


const ItemListContainer = ({ greeting }) => {
	return (
		<div>
			<Box h="40vh" bg="#3BD1B8">
				{greeting}
			</Box>
		</div>
	);
};

export default ItemListContainer; 