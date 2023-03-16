import { createContext, useState } from "react";

export const cartContext = createContext();

const StateCart = ({ children }) => {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
	return (
		<cartContext.Provider
			value={{
				allProducts,
				setAllProducts,
				countProducts,
				setCountProducts,
				total,
				setTotal,
			}}
		>
			{children}
		</cartContext.Provider>
	);
};

export default StateCart;
