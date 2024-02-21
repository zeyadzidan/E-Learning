import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "./store";
import mainTheme from "./themes/main-theme";

const element = document.getElementById("root");
const root = createRoot(element);

root.render(
  <ThemeProvider theme={mainTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
