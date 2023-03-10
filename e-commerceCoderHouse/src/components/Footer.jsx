import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<Box bg="brand.secondary">
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
						<i className="fi fi-rr-marker">
							{" "}
							25 de Mayo 295 | General Paz | Córdoba
						</i>
					</Col>

					<Col xs={6}>
						<br />
						<img
							src="../src/assets/othersImg/visa.png"
							alt="Logo"
							width="60"
							className="d-inline-block"
						/>{" "}
						<img
							src="../src/assets/othersImg/american-express.png"
							alt="Logo"
							width="60"
							className="d-inline-block"
						/>
            	<img
							src="../src/assets/othersImg/master.png"
							alt="Logo"
							width="70"
							className="d-inline-block"
						/>
						<br />
						<img
							src="../src/assets/othersImg/mercadopago.png"
							alt="Logo"
							width="120"
							className="d-inline-block"
						/>
						<img
							src="../src/assets/othersImg/rapipago.png"
							alt="Logo"
							width="121"
							className="d-inline-block"
						/>
						<p>EFECTIVO Y TRANSFERENCIA</p>
						<img
							src="../src/assets/othersImg/pago.png"
							alt="Logo"
							width="50"
							className="d-inline-block"
						/>
            	<img
							src="../src/assets/othersImg/transferencia.png"
							alt="Logo"
							width="40"
							className="d-inline-block"
						/>
					</Col>
					<Col>
						<h2>Redes sociales</h2>
						<i className="fi fi-brands-instagram">Ohmydog.petstore</i> <br />
						<i className="fi fi-rr-envelope">ohmydog@gmail.com</i> <br />
						<i className="fi fi-rr-phone-call">+5493517634798 </i>
					</Col>
				</Row>
			</Container>
		</Box>
	);
}

export default Footer;
