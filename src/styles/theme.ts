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
    learnBtn: CSSProperties;
  }

  interface TypographyVariantsOptions {
    headerTab?: CSSProperties;
    estimateBtn?: CSSProperties;
    learnBtn?: CSSProperties;
  }
}

const blue = "#0b72b9",
  orange = "#ffba60",
  grey = "#868686";

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
      fontSize: "2.5rem",
      color: blue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: blue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: grey,
    },
    learnBtn: {
      borderColor: blue,
      color: blue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});

export default theme;
