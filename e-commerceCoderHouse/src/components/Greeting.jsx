import React from "react";
import { Box } from "@chakra-ui/react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const WelcomeGreeting = ({ greeting }) => {
	return (
		<div>
			<Box h="20hv" bg="brand.secondary">
			<img
						src="../src/assets/ohmydog.png"
						alt="Logo"
						width="120"
						height="70"
						className="d-inline-block align-text-top"
					/>
					<br />
				{(greeting = "¡HOLA! GRACIAS POR VISITARNOS.♥")}
			</Box>
		</div>
	);
};

export default WelcomeGreeting;
