import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react";


function NavBar() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
	return (
		<>
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
							<Link to={"/"}><p className="text-nav"> Home</p></Link>
							<Link to={"/aboutus"}><p className="text-nav">Nosotros</p></Link>

							<NavDropdown title="Mascotas" id="basic-nav-dropdown">
								<Link to={"/mascotas/animal_Perro"}>
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
								<Link to={"/mascotas/animal_Gato"}>
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
								<Link to={"/mascotas/animal_Peces"}>
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
								<Link to={"/mascotas/animal_Aves"}>
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
								<Link to={"/mascotas/animal_Otros"}>
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
							<CartWidget
								allProducts={allProducts}
								setAllProducts={setAllProducts}
								total={total}
								setTotal={setTotal}
								countProducts={countProducts}
								setCountProducts={setCountProducts}
							/>
						</Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavBar;
