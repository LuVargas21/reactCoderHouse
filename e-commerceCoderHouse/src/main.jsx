import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { theme } from "./resources/themeIndex";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAbsw4-bYGJUIR_NdO9ABqX8T46aXkci4w",
	authDomain: "ecommerce-reactch.firebaseapp.com",
	projectId: "ecommerce-reactch",
	storageBucket: "ecommerce-reactch.appspot.com",
	messagingSenderId: "778738575756",
	appId: "1:778738575756:web:5a85e8d9a5366f76548ea9",
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ChakraProvider>
	</BrowserRouter>
);
