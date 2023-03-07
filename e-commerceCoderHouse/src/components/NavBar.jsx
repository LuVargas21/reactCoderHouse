import { Box } from "@chakra-ui/react";
import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg light container-fluid">
				<Link to="/">
					<img
						src="./src/assets/logo.png"
						alt="Logo"
						width="100"
						height="70"
						className="d-inline-block align-text-top"
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Perros
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Gatos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Peces
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Aves
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Otras especies
							</a>
						</li>
					</ul>

					<Link to={"/cart "}>
						
						<CartWidget />
					</Link>

					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Buscar"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Buscar
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
