import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";

import "./styles/index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
