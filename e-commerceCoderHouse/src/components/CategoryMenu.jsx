import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
	return (
		<div>
		
			<div className=" menuContainer ">
				<br />
				<h2 className="menuTitle"> Categorías</h2>
				<br />
				<br />
				<div className="row">
					<div className="col">
					<Link to={"/catalogue/Alimento"}>
							<img
								src="../src/assets/category/comida.png"
								width="50"
								height="50"
								alt="Alimentos"
							/>
							<p className="textMenu">Alimentos</p>
						</Link>
					</div>
					<div className="col">
					<Link to={"/catalogue/Accesorios"}>
							<img
								src="../src/assets/category/cama.png"
								width="50"
								height="50"
								alt="Accesorios"
							/>
							<p className="textMenu">Accesorios</p>
						</Link>
					</div>
					<div className="col">
					<Link to={"/catalogue/Juguetes"}>
							<img
								src="../src/assets/category/juguetes.png"
								width="50"
								height="50"
							/>
							<p className="textMenu">Juguetes</p>
						</Link>
					</div>
					<div className="col">
					<Link to={"/catalogue/estetica"}>
							<img
								src="../src/assets/category/banos.png"
								width="50"
								height="50"
								alt="Higiene"
							/>
							<p className="textMenu">Estética e Higiene</p>
						</Link>
					</div>
					<div className="col">
					<Link to={"/catalogue/Salud"}>
							<img
								src="../src/assets/category/medico.png"
								width="50"
								height="50"
								alt="Salud"
							/>
							<p className="textMenu">Salud</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryMenu;
