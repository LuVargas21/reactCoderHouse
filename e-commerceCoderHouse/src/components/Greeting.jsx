import React from "react";
import { Box } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const WelcomeGreeting = ({ greeting }) => {
	return (
		<div>
			<Box h="5vh" bg="brand.secondary">
				{greeting="¡HOLA! GRACIAS POR VISITARNOS.♥"}
			</Box>

			<Box>
				<img src="./src/assets/bannerbanco.png"></img>
			</Box>


			
		</div>


	);
};

export default WelcomeGreeting;
