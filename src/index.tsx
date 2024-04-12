import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider, createHashRouter } from "react-router-dom";

import App from "./pages/App";
import theme from "./styles/theme";

import "./styles/index.css";

const router = createHashRouter([
  {
    path: "*",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
