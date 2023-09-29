import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/main/component";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

root.render(<MainPage />);
