import React, { useContext } from "react";
import { cartContext } from "../context/StateCart";

const Prueba = () => {
	const { allProducts, total } = useContext(cartContext);

	return (
		<div>
			<div className="row container-check">
				<div className="col-7">
					<div className="container-step">
						<h2 className="text-title">
							<i className="fi fi-rr-circle-1"></i> Identificación
						</h2>
						<form className="">
							<div className="">
								<label htmlFor="nombre">Nombre:</label>
								<input type="text" id="nombre" name="nombre" />
								<label htmlFor="apellido" className="text-label">
									Apellido:
								</label>
								<input
									type="text"
									id="apellido"
									name="apellido"
									className="text-nav"
								/>
							</div>
							<div>
								<label htmlFor="correo" className="text-label">
									Correo electrónico:
								</label>
								<input
									type="email"
									id="correo"
									name="correo"
									className="text-nav"
								/>
							</div>
							<div>
								<label htmlFor="dni" className="text-label">
									DNI:
								</label>
								<input type="text" id="dni" name="dni" className="text-nav" />
								<label htmlFor="telefono" className="text-label">
									Teléfono móvil:
								</label>
								<input
									type="tel"
									id="telefono"
									name="telefono"
									className="text-nav"
								/>
							</div>
						</form>
					</div>

					<div className="container-step">
						<h2 className="text-title">
							<i className="fi fi-rr-circle-2"></i> Opciones de entrega
						</h2>
						<div>
							<label className="text-label">
								<input type="radio" name="entrega" value="tienda" />
								Retiro en tienda.
							</label>
						</div>
						<div>
							<label className="text-label">
								<input type="radio" name="entrega" value="domicilio" />
								Envío a domicilio
							</label>
						</div>
					</div>

					<div className="container-step">
						<h2 className="text-title">
							{" "}
							<i className="fi fi-rr-circle-3"></i> Opciones de pago
						</h2>
						<div>
							<label className="text-label">
								<input type="radio" name="pago" value="tarjeta_credito" />
								Tarjeta de crédito
							</label>
						</div>
						<div>
							<label className="text-label">
								<input type="radio" name="pago" value="tarjeta_debito" />
								Tarjeta de débito
							</label>
						</div>
						<div>
							<label className="text-label">
								<input type="radio" name="pago" value="efectivo" />
								Efectivo
							</label>
						</div>
						<div>
							<label className="text-label">
								<input type="radio" name="pago" value="transferencia" />
								Transferencia
							</label>
						</div>
					</div>
				</div>

				<div className="col-4">
					<div className="container-step">
						<h2 className="text-title">Resumen de la compra</h2>
						<div>
							<ul>
								{allProducts.map((product) => (
									<li key={product.id}>
										<div>
											<img
												src={product.image}
												alt={product.product}
												width="45"
											/>
										</div>

										<div>
											<span className="text-label">{product.product}</span>
										</div>
										<div className="text-label">${product.price}</div>
									</li>
								))}
							</ul>
							<div className="">
								<h3 className="text-label">Total a pagar:</h3>
								<span className="text-label">${total}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="button-confirm">
				<button type="submit" className="checkout-btn-pagar">
					Confirmar
				</button>
			</div>
		</div>
	);
};

export default Prueba;
