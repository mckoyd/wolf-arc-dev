import { CSSProperties } from "react";
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
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  learnButton: {
    ...(theme.typography.learnBtn as CSSProperties),
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
  },
}));
