import React from "react";
import { Box } from "@chakra-ui/react";

const WelcomeGreeting = ({ greeting }) => {
	return (
		<div>
			<Box bg="brand.secondary">
				<div className="greeting">
					{(greeting = "¡HOLA! GRACIAS POR VISITARNOS.♥")}
				</div>
			</Box>
		</div>
	);
};

export default WelcomeGreeting;
