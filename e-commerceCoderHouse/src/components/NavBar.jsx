import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
function NavBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Link to="/">
					<Navbar.Brand>
						<img
							src="../src/assets/logo.png"
							alt="Logo"
							width="130"
							height="70"
							className="d-inline-block align-text-top"
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/">
							<Nav.Link>Home</Nav.Link>{" "}
						</Link>
						<Nav.Link href="#link">Nosotros</Nav.Link>
						<NavDropdown title="Mascotas" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								<img
									src="../src/assets/animalsImg/perro.png"
									alt="Logo"
									width="30"
									className="d-inline-block align-text-top"
								/>
								Perros
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								<img
									src="../src/assets/animalsImg/gato.png"
									alt="Logo"
									width="30"
									className="d-inline-block align-text-top"
								/>
								Gatos
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								<img
									src="../src/assets/animalsImg/pez.png"
									alt="Logo"
									width="30"
									className="d-inline-block align-text-top"
								/>
								Peces
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">
								<img
									src="../src/assets/animalsImg/ave.png"
									alt="Logo"
									width="30"
									className="d-inline-block align-text-top"
								/>
								Aves
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">
								<img
									src="../src/assets/animalsImg/conejo.png"
									alt="Logo"
									width="30"
									className="d-inline-block align-text-top"
								/>
								Otras Especies
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Link to={"/cart "}>
						<CartWidget />
					</Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
