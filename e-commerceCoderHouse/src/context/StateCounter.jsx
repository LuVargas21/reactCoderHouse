import { createContext, useState } from "react";

export const CounterContext = createContext();

const StateCounter = ({ children }) => {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		if (count < 10) {
			setCount(count + 1);
		}
	};

	const decrementCount = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	const reset = () => {
		setCount(0);
	};

	return (
		<CounterContext.Provider
			value={{
				count,
				incrementCount,
				decrementCount,
				reset,
			}}
		>
			{children}
		</CounterContext.Provider>
	);
};

export default StateCounter;
