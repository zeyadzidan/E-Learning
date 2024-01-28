import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import mainTheme from "./themes/main-theme";

const element = document.getElementById("root");
const root = createRoot(element);

root.render(
  <ThemeProvider theme={mainTheme}>
    <App />
  </ThemeProvider>
);
