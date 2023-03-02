import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { theme } from "./resources/themeIndex";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ChakraProvider>
	</BrowserRouter>
);
