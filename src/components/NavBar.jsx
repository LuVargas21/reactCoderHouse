import { Button, Heading, Box } from "@chakra-ui/react";
import React from "react";
import CartWidget from "./CartWidget";



const NavBar = () => {
	return (
		<div>
			<Box h="15vh" bg="#847BDB">

				<Heading color="#fefae0"> Oh my Dog
                ! </Heading>
				<CartWidget />
				<Button color="#fefae0" margin="1px" variant="link">
					Dog
				</Button>
				<Button color="#fefae0"  margin="1px" variant="link">
					Cat
				</Button>
				<Button color="#fefae0"  margin="1px" variant="link">
					Others
				</Button>
				
			</Box>
          

		</div>
	);
};

export default NavBar;
