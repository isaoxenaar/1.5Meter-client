import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./app.css";

ReactDOM.render(
  <BrowserRouter>
    <main class="homemain">
      <App />
    </main>
  </BrowserRouter>,
  document.getElementById("root")
);
