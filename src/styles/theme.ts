import { Theme, createTheme } from "@mui/material/styles";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface CommonColors {
    blue: string;
    orange: string;
  }

  interface TypographyVariants {
    headerTab: CSSProperties;
    estimateBtn: CSSProperties;
  }

  interface TypographyVariantsOptions {
    headerTab?: CSSProperties;
    estimateBtn?: CSSProperties;
  }
}

const blue = "#0b72b9",
  orange = "#ffba60";

const theme: Theme = createTheme({
  palette: {
    common: {
      blue,
      orange,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: orange,
    },
  },

  typography: {
    headerTab: {
      color: "white",
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimateBtn: {
      fontFamily: "Pacifico",
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      fontWeight: 700,
      color: blue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: blue,
      fontWeight: 700,
    },
  },
});

export default theme;
