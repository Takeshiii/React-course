import React from "react";
import ReactDOM from "react-dom/client";

import { MainPage } from "./pages/Main/component";
import { ThemeProvider } from "./contexts/Theme";

import "./assets/main/main.scss";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider>
    <MainPage />
  </ThemeProvider>
);
