import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useAppStyles = tss.create(({ theme }) => ({
  app: {
    height: "100vh",
  },
  toolbarMargin: {
    ...(theme.mixins.toolbar as CSSProperties),
    marginBottom: "3em",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
}));
