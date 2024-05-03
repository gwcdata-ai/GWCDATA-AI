import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
const helmetContext = {};
root.render(
  <BrowserRouter>
    <HelmetProvider content={helmetContext}>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);
