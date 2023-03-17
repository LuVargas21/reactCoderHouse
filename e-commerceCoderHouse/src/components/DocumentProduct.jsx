import React from "react";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const DocumentProduct = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		const oneItem = doc(db, "productos", `${id}`);
		getDoc(oneItem).then((snapshot) => {
			if (snapshot.exists()) {
				const docs = snapshot.data();
				console.log(docs);
				setProduct(docs);
			}
		});
	}, []);

	return <div></div>;
};

export default DocumentProduct;
