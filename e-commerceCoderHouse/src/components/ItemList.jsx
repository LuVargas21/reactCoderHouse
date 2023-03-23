import React from "react";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";
import CardItemJson from "/src/data/products.json";
import { Col, Row } from "react-bootstrap";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemList = () => {
	const { filter } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		const itemsCollection = collection(db, "productos");
		getDocs(itemsCollection).then((snapshot) => {
			const docs = snapshot.docs.map((doc) => doc.data(), doc.id);
			console.log(docs);
			setProducts(docs);
		});
	}, []);

	useEffect(() => {
		let categoryId;
		let animalId;

		console.log(window.location.pathname);
		const filters = filter.split("_");
		if (filters[0] == "category") {
			categoryId = filters[1];
			const filteredProducts = CardItemJson.filter(
				(product) => product.categoryId === categoryId
			);
			setProducts(filteredProducts);
		} else {
			animalId = filters[1];
			const filteredProducts = CardItemJson.filter(
				(product) => product.animal === animalId
			);
			setProducts(filteredProducts);
		}
	}, [window.location.pathname]);

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

export default ItemList;
