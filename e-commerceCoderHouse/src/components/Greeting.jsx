import React from "react";
import { Box } from "@chakra-ui/react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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
