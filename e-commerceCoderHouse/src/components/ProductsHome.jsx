import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CardItemJson from "/src/data/products.json";
import CardItem from "./CardItem";
import CollectionProducts from "./CollectionProducts"
function ProductsHome() {
	let products = CardItemJson;
	let dbProducts = CollectionProducts;
	console.log(dbProducts);
	return (
		<div>
			<Row xs={1} md={2} lg={4} className="g-4">
				{products.map((product, index) => (
					<Col key={index}>
						<CardItem product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
}

export default ProductsHome;
