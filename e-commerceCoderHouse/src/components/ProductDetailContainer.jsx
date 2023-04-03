import React from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () => {
	const { id } = useParams();
	return (
		<div className="">
			<ProductDetail id={id} />
		</div>
	);
};

export default ProductDetailContainer;
