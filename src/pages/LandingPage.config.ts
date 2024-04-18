import { tss } from "tss-react/mui";

export const useLandingPageStyles = tss.create(({ theme }) => ({
  mainContainer: {
    marginTop: "4em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
}));
