import React from "react";
import { useState } from "react";

const SendOrder = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		name === " " ? alert("Campo vacío, por favor completar") : alert(name);
		email === "" ? alert("Ingrese email") : alert(email);
		console.log("Enviando..." + "" + name + email);
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="formRegister">
				<div className="formContainer">
					<div>
						<h2 className="registerTitle">
							Completa el formulario y registrate.
						</h2>
					</div>
					<div className="formGroup">
						<label for="user_name" className="formLabel">
							Nombre y Apellido
						</label>
						<input
							type="text"
							onChange={(e) => setName(e.target.value)}
							className="formInput"
							id="name"
							name="user_name"
							placeholder=" "
							required
						/>
					</div>

					<div className="formGroup">
						<label for="user_mail" className="formLabel">
							Correo electrónico
						</label>
						<input
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							className="formInput"
							id="mail"
							name="user_mail"
							required
						/>
					</div>

					<button
						type="submit"
						className="formBtn"
						name="register"
						id="user_register"
					>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default SendOrder;
