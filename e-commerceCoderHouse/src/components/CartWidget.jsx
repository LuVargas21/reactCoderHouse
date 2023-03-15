import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartWidget = ({ allProducts, setAllProduc }) => {
	const [active, setActive] = useState(false);
	const [quantity, setQuantity] = useState(0);

	return (
		<>
			<div className="container-icon">
				<div className="container-cart-icon" onClick={() => setActive(!active)}>
					<img src="../src/assets/othersImg/cart.png" width="30" alt="Cart" />

					<div className="count-products">
						<span id="contador-productos">
							<h2>{quantity}</h2>
						</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${active ? "" : "hidden-cart"}`}
				>
					{allProducts.length ? (
						<>
							<div className="row-product hidden ">
								<div className="cart-product">
									<div className="info-cart-product">
										<span className="cantidad-producto-carrito">1</span>
										<p className="titulo-producto-carrito">Zapatos Nike</p>
										<span className="precio-producto-carrito">$80</span>
									</div>
									<i className="icon-close fi fi-br-x "></i>
								</div>
							</div>

							<div className="cart-total">
								<h3>Total:</h3>
								<span className="total-pagar">$200</span>
							</div>
						</>
					) : (
						<div className="cart-empty">
							<p className="cart-empty">El carrito está vacío</p>
							<Link to={"/"}>
								{" "}
								<i class="fi fi-rr-arrow-left"> <p className="text-nav">  Volver a la página principal</p></i>
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default CartWidget;
