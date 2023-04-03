import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../context/StateCart";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ProductDetail = () => {
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

	const toast = useToast();

	const {
		allProducts,
		setAllProducts,
		countProducts,
		setCountProducts,
		total,
		setTotal,
	} = useContext(cartContext);

	const onAddProduct = (product) => {
		toast({
			title: "Producto añadido al carrito",
			variant: "subtle",
			status: "success",
			duration: 3000,
			isClosable: true,
		});
		if (allProducts.find((item) => item.id === product.id)) {
			const products = allProducts.map((item) =>
				item.id === product.id
					? { ...item, quantityDefect: item.quantityDefect + 1 }
					: item
			);
			setTotal(total + product.price * product.quantityDefect);
			setCountProducts(countProducts + product.quantityDefect);
			return setAllProducts([...products]);
		}
		setTotal(total + product.price * product.quantityDefect);
		setCountProducts(countProducts + product.quantityDefect);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div>
			<div className="product-detail-container">
				<div className="product-images">
					<img src={product.image} alt={product.product} />
				</div>

				<div className="product-info">
					<h2 className="text-title-card">{product.product}</h2>
					<p className="subtext">Categoría:{product.categoryId} </p>
					<p className="subtext"> Sub categoría: {product.subCategory} </p>
					<p className="subtext">Descripción: {product.description}</p>
					<p className="price-card-detail">${product.price}</p>

					<button
						onClick={() => onAddProduct(product)}
						className="btn-add-cart-detail"
					>
						Añadir al carrito
					</button>
					<Link to="/">
						{" "}
						<button className="btn-back">
							{" "}
							<i className="fi fi-rr-arrow-left">
								{" "}
								Volver a la página principal
							</i>
						</button>
					</Link>

					<div className="footer-card-detail">
						<ul>
							<li>
								{" "}
								<i className="fi fi-rr-comment-dollar"></i> Ver medios de pago
							</li>
							<li>
								{" "}
								<i className="fi fi-brands-instagram"> </i> Ohmydog.cba
							</li>
							<li>
								{" "}
								<a href="https://api.whatsapp.com/send/?phone=5493517634798&text&type=phone_number&app_absent=0">
									{" "}
									<i className="fi fi-rr-phone-call"> </i> +5493517634798{" "}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
