import React from "react";
import { SpinnerDotted } from 'spinners-react';
const Loader = () => {
	return (
		<div>
			<SpinnerDotted size={100} thickness={100} speed={100} color="#FF56A7" />
			<h1> ¡Espera! Estamos agregando tus productos... </h1>
		</div>
	);
};

export default Loader;


