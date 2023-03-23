import React, { useContext, useState } from "react";
import { cartContext } from "../context/StateCart";
import SendOrder from "./SendOrder";
const Checkout = () => {
	const { allProducts, total } = useContext(cartContext);
	const [showForm, setShowForm] = useState(false);
	return (
		<div>
			<h2 className="menu-title">Detalles de tu compra</h2>
			<div className="checkout-container">
				<div>
					<table className="table">
						<thead>
							<tr>
								<th> </th>
								<th className="title-table">Producto</th>
								<th className="title-table">Precio unitario</th>
								<th className="title-table">Cantidad</th>
								<th className="title-table">Subtotal</th>
							</tr>
						</thead>
						<tbody>
							{allProducts.map((product) => (
								<tr key={product.id}>
									<td>
										<img src={product.image} alt={product.product} width="60" />
									</td>
									<td>
										<span className="titulo-producto-carrito">
											{product.product}
										</span>
									</td>
									<td className="titulo-producto-carrito">${product.price}</td>
									<td className="titulo-producto-carrito">
										{product.quantityDefect}
									</td>
									<td className="precio-producto-carrito">
										${product.price * product.quantityDefect}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="checkout-sidebar">
					<div className="checkout-total">
						<h3 className="titulo-producto-carrito">Total a pagar:</h3>
						<span className="precio-producto-carrito">${total}</span>
					</div>
					<button
						className="checkout-btn-pagar"
						onClick={() => setShowForm(true)}
					>
						Ir a pagar
					</button>
				</div>
			</div>
			{showForm && <SendOrder />}
		</div>
	);
};

export default Checkout;
