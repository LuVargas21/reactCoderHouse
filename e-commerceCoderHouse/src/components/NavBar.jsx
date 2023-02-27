import { Box } from "@chakra-ui/react";
import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<div>
			
				<nav class="navbar navbar-expand-lg bg-light">
					<div class="container-fluid">
						<a class="navbar-brand" href="#">
                            <img src="./src/assets/logo.png" alt="" />
						</a>
                      
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="#">
										Perros
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="#">
										Gatos
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="#">
										Peces
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="#">
										Aves
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="#">
										Otros
									</a>
								</li>
							</ul>
                            <CartWidget />
							<form class="d-flex" role="search">
								<input
									class="form-control me-2"
									type="search"
									placeholder="Buscar"
									aria-label="Search"
								/>
								<button class="btn btn-outline-success" type="submit">
									Buscar
								</button>
							</form>
                     
						</div>
					</div>
                    		
				</nav>
		
	
		</div>
	);
};

export default NavBar;
