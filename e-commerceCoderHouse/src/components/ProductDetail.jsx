import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

const ProductDetail = ({ id }) => {
	const [count, setCount] = useState(0);

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
		<div>
			<div className="product-detail-container">
				<div className="product-images">
					<img width="200" src={product.image} alt="Product image 1" />

					<img width="200" src={product.image} alt="Product image 2" />
				</div>
				<div>
					<img
						width="350"
						src={product.image}
						alt="Main product"
						className="product-main"
					/>
				</div>
				<div className="product-info">
					<h2 className="text-title-card">{product.product}</h2>
					<p className="subtext">{product.category} </p>
					<p className="subtext">{product.description}</p>
					<p className="subtext">{product.subCategory} </p>
					<p className="price-card-detail">${product.price}</p>

					<Button
						onClick={() => onAddProduct(product)}
						variant="solid"
						colorScheme="pink"
						className="btn-add-cart"
					>
						Añadir al carrito
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
