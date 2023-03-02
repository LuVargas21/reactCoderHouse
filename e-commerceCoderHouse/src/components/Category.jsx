import React from 'react'

const Category = () => {
  return (
    <div>
      
			<div className=" menuContainer ">
                <br />
				<h2 className="menuTitle"> Categorías</h2>
                <br /> 
                <br />
				<div className="row">
					<div className="col">
						<a href="">
							<img
								src="./src/assets/category/alimento.png"
								width="50"
								height="50"
								alt="Alimentos"
							/>
					<p className="textMenu">Alimentos</p>
						</a>
                        
					</div>
					<div className="col">
						<a href="">
							<img
								src="./src/assets/category/accesorio.png"
								width="50"
								height="50"
								alt="Accesorios"
							/>
							<p className="textMenu">Accesorios</p>
						</a>
					</div>
                    <div className="col">
						<a href="">
							<img
								src="./src/assets/category/juguete.png"
								width="50"
								height="50"
							/>
							<p className="textMenu">Juguetes</p>
						</a>
					</div>
					<div className="col">
						<a href="">
							<img
								src="./src/assets/category/higiene.png"
								width="50"
								height="50"
								alt="Higiene"
							/>
							<p className="textMenu">Estética e Higiene</p>
						</a>
					</div>
					<div className="col">
						<a href="">
							<img
							src="./src/assets/category/salud.png"
                            width="50"
                            height="50"
								alt="Salud"
							/>
							<p className="textMenu">Salud</p>
						</a>
					</div>
                    
				</div>
			</div>
    </div>
  )
}

export default Category
