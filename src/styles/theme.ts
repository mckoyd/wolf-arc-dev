import { Theme, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CommonColors {
    blue: string;
    orange: string;
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
    h3: {
      fontWeight: 300,
    },
  },
});

export default theme;
