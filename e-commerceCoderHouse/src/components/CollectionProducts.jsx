import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const CollectionProducts = () => {
	const doc = " "
	const [products, setProducts] = useState([]);
	console.log(products);
	useEffect(() => {
		const db = getFirestore();
		const itemsCollection = collection(db, "productos");
		getDocs(itemsCollection).then((snapshot) => {
			const docs = snapshot.docs.map((doc) => doc.data(), doc.id);
			console.log(docs);
			setProducts(docs);
		});
	}, []);

	return <div>

	</div>;
	
};

export default CollectionProducts;
