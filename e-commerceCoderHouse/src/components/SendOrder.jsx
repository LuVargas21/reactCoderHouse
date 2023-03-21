import React from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";

const SendOrder = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [orderId, setOrderId] = useState("");
	const db = getFirestore();

	const handleSubmit = (e) => {
		e.preventDefault();
		addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
	};

	const order = {
		name,
		email,
		phone,
	};
	const orderCollection = collection(db, "orden");

	return (
		<div>
			<form onSubmit={handleSubmit} className="form-register">
				<div className="form-container">
					<div>
						<h2 className="register-title">
							Completa el formulario.
						</h2>
					</div>
					<div className="form-group">
						<label htmlFor="user_name" className="form-label">
							Nombre y Apellido
						</label>
						<input
							type="text"
							onChange={(e) => setName(e.target.value)}
							className="form-input"
							id="name"
							name="user_name"
							placeholder=" "
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="user_mail" className="form-label">
							Correo electrónico
						</label>
						<input
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							className="form-input"
							id="mail"
							name="user_mail"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="user_phone" className="form-label">
							Teléfono
						</label>
						<input
							type="text"
							onChange={(e) => setPhone(e.target.value)}
							className="form-input"
							id="phone"
							name="user_phone"
							required
						/>
					</div>

					<button
						type="submit"
						className="form-btn"
						name="register"
						id="user_register"
					>
						Enviar
					</button>
					<div className="order-id"></div>
					<h2 className="text-order">Nro de orden: {orderId}</h2>
				</div>
			</form>
		</div>
	);
};

export default SendOrder;
