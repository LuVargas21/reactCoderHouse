import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<Box bg="brand.primary">
			<Container>
				<Row>
					<Col>
						<Link to="/">
							<img
								src="../src/assets/logo.png"
								alt="Logo"
								width="130"
								height="70"
								className=" "
							/>
						</Link>
						<i class="fi fi-rr-marker">
							{" "}
							25 de Mayo 295 | General Paz | Córdoba
						</i>
					</Col>
					<Col xs={6}>
						<br />
						<img
							src="../src/assets/mercadopago_logos.jpg"
							alt="Logo"
							width="450"
							className="d-inline-block"
						/>
					</Col>
					<Col>
						<h2>Redes sociales</h2>
						<i class="fi fi-brands-instagram">Ohmydog.petstore</i> <br />
						<i class="fi fi-rr-envelope">ohmydog@gmail.com</i> <br />
						<i class="fi fi-rr-phone-call">+5493517634798 </i>
					</Col>
				</Row>
			</Container>
		</Box>
	);
}

export default Footer;
