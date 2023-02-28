import React from "react";
import { Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const WelcomeGreeting = ({ greeting }) => {
	return (
		<div>
			<Box h="5vh" bg="brand.secondary">
				{greeting}
			</Box>

			<Box>
				<img src="./src/assets/bannerbanco.png"></img>
			</Box>

			<div className="banner">
				<img src="./src/assets/banner1.png"  width="100%" alt="banner" />
			</div>
			<br />
			<div className=" menuContainer ">
				<h2 className="menuTitle"> Categorías</h2>
				<div className="row">
					<div className="col">
						<a href="">
							<img
								src="./src/assets/comida.png"
								width="80"
								height="70"
								alt="Alimentos"
							/>
							<p className="textMenu">Alimento</p>
						</a>
					</div>
					<div className="col">
						<a href="">
							<img
								src="./src/assets/accesorio.png"
								width="80"
								height="70"
								alt=""
							/>
							<p textMenu>Accesorios</p>
						</a>
					</div>
					<div className="col">
						<a href="">
							<img
								src="./src/assets/higiene.png"
								width="90"
								height="70"
								alt="Higiene"
							/>
							<p textMenu>Estética e Higiene</p>
						</a>
					</div>
					<div className="col">
						<a href="">
							<img
								src="./src/assets/medicine.png"
								width="80"
								height="70"
								alt="Salud"
							/>
							<p textMenu>Salud</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WelcomeGreeting;
