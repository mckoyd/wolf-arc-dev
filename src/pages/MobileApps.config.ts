import { tss } from "tss-react/mui";

export const useMobileAppsStyles = tss.create(({ theme }) => ({
  rowContainer: {
    padding: "0 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1.5em",
    },
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  arrowBtn: {
    "&:hover": {
      background: "transparent",
    },
  },
  heading: {
    maxWidth: "40em",
  },
}));
