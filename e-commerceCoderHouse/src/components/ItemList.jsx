import React from "react";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemList = () => {
	const { filter } = useParams();
	const [products, setProducts] = useState([]);
	const doc = "";

	useEffect(() => {
		putFilter();
	}, [filter]);

	async function getProducts() {
		const db = getFirestore();
		const itemsCollection = collection(db, "productos");
		return await getDocs(itemsCollection).then((snapshot) => {
			const docs = snapshot.docs.map((doc) => { 
				const data = doc.data();
				const id= doc.id;
				return { id, ...data }
			}, doc.id);
			console.log(docs);
			return docs;
		});
	}
	async function putFilter() {
		let categoryId;
		let animalId;

		console.log(window.location.pathname);
		if (filter) {
			const products_ = await getProducts();
			const filters = filter.split("_");
			if (filters[0] === "category") {
				categoryId = filters[1];
				const filteredProducts = products_.filter(
					(product) => product.categoryId === categoryId
				);
				setProducts(filteredProducts);
			} else {
				animalId = filters[1];
				const filteredProducts = products_.filter(
					(product) => product.animal === animalId
				);
				setProducts(filteredProducts);
			}
		}
	}
	return (
		<div>
			<Row xs={1} md={2} lg={4} className="g-4">
				{products.map((product) => (
					<Col key={product.id}>
						<CardItem key={product.id} product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default ItemList;
