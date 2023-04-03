import React from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState, useContext } from "react";
import { cartContext } from "../context/StateCart";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SendOrder = () => {
	const { allProducts, total } = useContext(cartContext);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [dni, setDni] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [orderId, setOrderId] = useState(false);
	const [showOrder, setShowOrder] = useState("");
	const [delivery, setDelivery] = useState("");
	const [payment, setPayment] = useState("");

	const db = getFirestore();

	const handleSubmit = (e) => {
		e.preventDefault();
		const orderCollection = collection(db, "orden");

		const order = {
			name,
			surname,
			dni,
			email,
			phone,
			deliveryOption: delivery,
			paymentOption: payment,
		};

		addDoc(orderCollection, order)
			.then((docRef) => {
				setOrderId(docRef.id);
				onOpen();
				window.scrollTo(0, 0);

				setName("");
				setSurname("");
				setDni("");
				setEmail("");
				setPhone("");
				setDelivery("");
				setPayment("");
			})
			.catch((error) => {
				alert(
					"Hubo un error al guardar la orden. Por favor, intenta de nuevo."
				);
			});
	};

	return (
		<div>
			<form className="row container-check" onSubmit={handleSubmit}>
				<div className="col-6">
					<div className="container-step">
						<h2 className="text-title">
							<i className="fi fi-rr-circle-1"></i> Identificación
						</h2>

						<div className="step">
							<label htmlFor="nombre">Nombre:</label>
							<input
								type="text"
								onChange={(e) => setName(e.target.value)}
								value={name}
								className="text-nav"
								id="name"
								name="user_name"
								placeholder=" "
								required
							/>
							<label htmlFor="apellido" className="text-label">
								Apellido:
							</label>
							<input
								type="text"
								onChange={(e) => setSurname(e.target.value)}
								value={surname}
								className="text-nav"
								id="surname"
								name="user_name"
								placeholder=" "
								required
							/>
						</div>
						<div>
							<label htmlFor="correo" className="text-label">
								Correo electrónico:
							</label>
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								className="text-nav"
								id="mail"
								name="user_mail"
								required
							/>
						</div>
						<div>
							<label htmlFor="dni" className="text-label">
								DNI:
							</label>
							<input
								onChange={(e) => setDni(e.target.value)}
								value={dni}
								type="text"
								id="dni"
								name="dni"
								className="text-nav"
								required
							/>
							<label htmlFor="telefono" className="text-label">
								Teléfono móvil:
							</label>
							<input
								onChange={(e) => setPhone(e.target.value)}
								value={phone}
								type="tel"
								id="telefono"
								name="telefono"
								className="text-nav"
								required
							/>
						</div>

						<div className="">
							<h2 className="text-title">
								<i className="fi fi-rr-circle-2"></i> Opciones de entrega
							</h2>
							<div>
								<label className="text-label">
									<input
										type="radio"
										name="entrega"
										value="tienda"
										onChange={(e) => setDelivery(e.target.value)}
										checked={delivery === "tienda"}
										required
									/>
									Retiro en tienda.
								</label>

								<label className="text-label">
									<input
										type="radio"
										name="entrega"
										value="domicilio"
										onChange={(e) => setDelivery(e.target.value)}
										checked={delivery === "domicilio"}
										required
									/>
									Envío a domicilio
								</label>
							</div>
						</div>

						<div className="">
							<h2 className="text-title">
								{" "}
								<i className="fi fi-rr-circle-3"></i> Opciones de pago
							</h2>
							<div>
								<label className="text-label">
									<input
										type="radio"
										name="pago"
										value="credito"
										onChange={(e) => setPayment(e.target.value)}
										checked={payment === "credito"}
										required
									/>
									Tarjeta de crédito
								</label>
							</div>
							<div>
								<label className="text-label">
									<input
										type="radio"
										name="pago"
										value="debito"
										onChange={(e) => setPayment(e.target.value)}
										checked={payment === "debito"}
										required
									/>
									Tarjeta de débito
								</label>
							</div>
							<div>
								<label className="text-label">
									<input
										type="radio"
										name="pago"
										value="cash"
										onChange={(e) => setPayment(e.target.value)}
										checked={payment === "cash"}
										required
									/>
									Efectivo
								</label>
							</div>
							<div>
								<label className="text-label">
									<input
										type="radio"
										name="pago"
										value="transferencia"
										onChange={(e) => setPayment(e.target.value)}
										checked={payment === "transferencia"}
										required
									/>
									Transferencia
								</label>
							</div>
						</div>

						<div className="button-confirm">
							<button
								type="submit"
								className="checkout-btn-pagar"
								name="sendorder"
								id="sendorder"
								onClick={(onOpen) => setOrderId(!orderId)}
							>
								Confirmar
							</button>

							<Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
								<ModalOverlay />
								<ModalContent>
									<ModalHeader fontSize="2xl">
										{" "}
										Orden de compra número: {orderId}
									</ModalHeader>
									<ModalCloseButton />
									<ModalBody fontSize="xl">
										<Text fontWeight="bold" mb="1rem">
											¡Gracias por tu compra!
										</Text>
										<Text fontSize="xl">Estamos procesando tu pedido. </Text>
										<Text fontSize="xl">
											{" "}
											No te preocupes! Cuando esté confirmado te enviaremos un
											mail con todos los detalles.
										</Text>
										<img
											src="../src/assets/logo.png"
											alt="Logo"
											width="130"
											height="70"
											className="logo"
										/>
									</ModalBody>

									<ModalFooter>
										<Link to="/">
											{" "}
											<Button colorScheme="pink" mr={3} onClick={onClose}>
												Cerrar
											</Button>
										</Link>
									</ModalFooter>
								</ModalContent>
							</Modal>
						</div>
					</div>
				</div>

				<div className="col-4">
					<div className="container-step">
						<h2 className="text-title">Resumen de la compra</h2>
						<div>
							<thead>
								<tr>
									<th> </th>
									<th className="text-nav">Producto</th>
									<th className="text-nav">Precio</th>
									<th className="text-nav">Cantidad</th>
									<th className="text-nav">Subtotal</th>
								</tr>
							</thead>
							<tbody>
								{allProducts.map((product) => (
									<tr key={product.id}>
										<td>
											<img
												src={product.image}
												alt={product.product}
												width="60"
											/>
										</td>
										<td>
											<span className="text-nav">{product.product}</span>
										</td>
										<td className="text-nav">${product.price}</td>
										<td className="text-nav">{product.quantityDefect}</td>
										<td className="text-nav">
											${product.price * product.quantityDefect}
										</td>
									</tr>
								))}
							</tbody>
							<tfoot>
								<tr>
									<td colSpan="5">
										<div className="text-nav">
											<span className="precio-producto-carrito">
												Total a pagar: ${total}
											</span>{" "}
										</div>
									</td>
								</tr>
							</tfoot>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SendOrder;
