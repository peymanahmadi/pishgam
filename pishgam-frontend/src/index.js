import React from "react";
import ReactDOM from "react-dom";
// import "normalize.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/appContext";
// import {AppProvider}

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
