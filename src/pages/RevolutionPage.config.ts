import { tss } from "tss-react/mui";

export const useRevolutionPageStyles = tss.create(({ theme }) => ({
  rowContainer: {
    padding: "0 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1.5em",
    },
  },
}));
