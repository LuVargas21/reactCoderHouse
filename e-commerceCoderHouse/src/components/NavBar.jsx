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

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to={"/"}>Home</Link>
						<Link to={"/"}>Nosotros</Link>

						<NavDropdown title="Mascotas" id="basic-nav-dropdown">
							<Link to={"/mascotas/Perro"}>
								<NavDropdown.Item href="#action/3.1">
									<img
										src="../src/assets/animalsImg/perro.png"
										alt="Logo"
										width="30"
										className="d-inline-block align-text-top"
									/>
									Perros
								</NavDropdown.Item>{" "}
							</Link>
							<Link to={"/mascotas/Gato"}>
								<NavDropdown.Item href="#action/3.2">
									<img
										src="../src/assets/animalsImg/gato.png"
										alt="Logo"
										width="30"
										className="d-inline-block align-text-top"
									/>
									Gatos
								</NavDropdown.Item>{" "}
							</Link>
							<Link to={"/mascotas/Peces"}>
								<NavDropdown.Item href="#action/3.3">
									<img
										src="../src/assets/animalsImg/pez.png"
										alt="Logo"
										width="30"
										className="d-inline-block align-text-top"
									/>
									Peces
								</NavDropdown.Item>
							</Link>
							<Link to={"/mascotas/Aves"}>
								<NavDropdown.Item href="#action/3.4">
									<img
										src="../src/assets/animalsImg/ave.png"
										alt="Logo"
										width="30"
										className="d-inline-block align-text-top"
									/>
									Aves
								</NavDropdown.Item>
							</Link>
							<Link to={"/mascotas/Otros"}>
								<NavDropdown.Item href="#action/3.4">
									<img
										src="../src/assets/animalsImg/conejo.png"
										alt="Logo"
										width="30"
										className="d-inline-block align-text-top"
									/>
									Otras Especies
								</NavDropdown.Item>
							</Link>
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
