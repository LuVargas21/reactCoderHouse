import React, { useState, useEffect } from "react";

const ProductDetail = ({ id }) => {
	const [product, setProduct] = useState({});

	useEffect(() => {
		fetch("/src/data/products.json")
			.then((response) => response.json())
			.then((data) => {
				const productData = data.find((product) => product.id === id);
				setProduct(productData);
			});
	
	}, []);

	return (
		<div className="card">
			<div className="card-img">
				<img
					src={product.image}
					alt=""
					width="100"
					className="d-inline-block align-text-top"
				/>
			</div>
			<div className="card-header">
				<h5>{product.product}</h5>
			</div>
			<div className="card-body">
				<p>{product.description}</p>
				<p>Precio: ${product.price}</p>
			</div>
			<div></div>
		</div>
	);
};

export default ProductDetail;
