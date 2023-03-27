import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import CardItem from "./CardItem";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ProductsHome() {
	const doc = " ";
	const [products, setProducts] = useState([]);
	//console.log(products);

	useEffect(() => {
		const db = getFirestore();
		const itemsCollection = collection(db, "productos");
		getDocs(itemsCollection).then((snapshot) => {
			const docs = snapshot.docs.map((doc) => doc.data(), doc.id);
			console.log(docs);
			setProducts(docs);
		});
	}, []);

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
