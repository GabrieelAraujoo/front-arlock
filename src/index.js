import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "./styles/theme";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import { CustomerProvider } from "./context/Autenticate";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <CustomerProvider>
          <App />
        </CustomerProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
