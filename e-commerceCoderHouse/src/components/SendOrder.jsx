import React from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";

const SendOrder = () => {
	const [showForm, setShowForm] = useState(false);

	// const handleGoToPay = () => {
	// 	setShowForm(true);

	// 	window.scrollTo(0, 0);
	// };
	{
		/* {showForm ? <SendOrder /> : <span></span>} */
	}
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [orderId, setOrderId] = useState(false);
	const [showOrder, setShowOrder] = useState("");
	const db = getFirestore();

	const handleSubmit = (e) => {
		e.preventDefault();
		addDoc(orderCollection, order).then(({ id }) => {
			setOrderId(id);
			setShowOrder(true);
			window.scrollTo(0, 0);
		});
	};

	const order = {
		name,
		email,
		phone,
	};
	const orderCollection = collection(db, "orden");

	const handleInputChange = (e) => setInput(e.target.value);

	return (
		<div>
			
			<form onSubmit={handleSubmit} className="form-register">
				<div className="form-container">
					<div>
						<h2 className="register-title">Completa el formulario.</h2>
					</div>
					<div className="form-group">
						<label htmlFor="user_name" className="form-label">
							Nombre y Apellido
						</label>
						<input
							type="text"
							onChange={(e) => setName(e.target.value)}
							value={name}
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
							value={email}
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
							value={phone}
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
						onClick={() => setOrderId(!orderId)}
					>
						Enviar
					</button>
				</div>
			</form>{" "}
			{showOrder && (
				<div className="order-id">
					<h2 className="text-order">Nro de orden: {orderId}</h2>
				</div>
			)}
		</div>
	);
};

export default SendOrder;
