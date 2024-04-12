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
  },
});

export default theme;
