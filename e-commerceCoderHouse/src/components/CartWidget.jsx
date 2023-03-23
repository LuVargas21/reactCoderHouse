import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/StateCart";

const CartWidget = () => {
	const {
		allProducts,
		setAllProducts,
		countProducts,
		setCountProducts,
		total,
		setTotal,
	} = useContext(cartContext);

	const [active, setActive] = useState(false);

	const deleteProduct = (product) => {
		const results = allProducts.filter((item) => item.id !== product.id);

		setTotal(total - product.price * product.quantityDefect);
		setCountProducts(countProducts - product.quantityDefect);
		setAllProducts(results);
		console.log(results);
	};

	const cleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};
	return (
		<>
			<div className="container-icon">
				<div className="container-cart-icon" onClick={() => setActive(!active)}>
					<img src="../src/assets/cart.png" width="45" alt="Cart" />

					<div className="count-products">
						<span id="contador-productos">
							<h2>{countProducts}</h2>
						</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${active ? "" : "hidden-cart"}`}
				>
					{allProducts.length ? (
						<>
							<div className="row-product">
								{allProducts.map((product) => (
									<div className="cart-product" key={product.id}>
										<div className="info-cart-product">
											<span className="cantidad-producto-carrito">
												{product.quantityDefect}
											</span>
											<p className="titulo-producto-carrito">
												{product.product}
											</p>
											<span className="precio-producto-carrito">
												${product.price}
											</span>
										</div>
										<button onClick={() => deleteProduct(product)}>
											<i className="icon-close fi fi-br-x"></i>
										</button>
									</div>
								))}
							</div>
							<div className="cart-total">
								<h3>Total:</h3>
								<span className="total-pagar">${total} </span>
							</div>
							<div className="btn-cart-end">
								<button className="btn-clear-all" onClick={cleanCart}>
									Vaciar carrito
								</button>

								<button className="btn-shop">
									<Link to={"/checkout"}>Iniciar compra</Link>
								</button>
							</div>
						</>
					) : (
						<div className="cart-empty">
							<p className="cart-empty"> ¡Ups! El carrito está vacío</p>
							<img
								src="../src/assets/carro-vacio.png"
								alt="Logo"
								width="70"
								className="d-inline-block align-text-top"
							/>

							<Link to={"/"}>
								{" "}
								<i className="fi fi-rr-arrow-left">
									{" "}
									<p className="text-nav"> Volver a la página principal</p>
								</i>
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default CartWidget;
