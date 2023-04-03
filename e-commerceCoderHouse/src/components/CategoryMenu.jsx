import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
	return (
		<div>
			<div className="menu-container">
				<br />
				<h2 className="menu-title"> Categorías</h2>
				<br />
				<br />
				<div className="row">
					<div className="category-container col center">
						<Link to={"/catalogue/category_Alimento"}>
							<img 
								className="img-category"
								src="../src/assets/category/comida.png"
								width="50"
								height="50"
								alt="Alimentos"
							/>
							<p className="text-menu">Alimentos</p>
						</Link>
					</div>
					<div className="category-container col  center">
						<Link to={"/catalogue/category_Accesorios"}>
							<img
								className="img-category"
								src="../src/assets/category/cama.png"
								width="50"
								height="50"
								alt="Accesorios"
							/>
							<p className="text-menu">Accesorios</p>
						</Link>
					</div>
					<div className="category-container col  center">
						<Link to={"/catalogue/category_Juguetes"}>
							<img
								className="img-category"
								src="../src/assets/category/juguetes.png"
								width="50"
								height="50"
							/>
							<p className="text-menu">Juguetes</p>
						</Link>
					</div>
					<div className="category-container  col  center">
						<Link to={"/catalogue/category_estetica"}>
							<img
								className="img-category"
								src="../src/assets/category/banos.png"
								width="50"
								height="50"
								alt="Higiene"
							/>
							<p className="text-menu">Estética e Higiene</p>
						</Link>
					</div>
					<div className="category-container col  center">
						<Link to={"/catalogue/category_Salud"}>
							<img
								className="img-category"
								src="../src/assets/category/medico.png"
								width="50"
								height="50"
								alt="Salud"
							/>
							<p className="text-menu">Salud</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryMenu;
