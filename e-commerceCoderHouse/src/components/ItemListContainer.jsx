import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";
import CardItemJson from "/src/data/products.json";
import { Col, Row } from "react-bootstrap";

const ProductListPage = () => {
	const { categoryId } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		console.log(CardItemJson);
		const filteredProducts = CardItemJson.filter(
			(product) => product.categoryId === categoryId
		);
		setProducts(filteredProducts);
	}, []);

	return (
		<div>
			<Row xs={1} md={2} lg={4} className="g-4">
				{products.map((product) => (
					<Col key={product.id}>{<CardItem product={product} />}</Col>
				))}
			</Row>
		</div>
	);
};

export default ProductListPage;
