import { tss } from "tss-react/mui";

export const useDocumentAndScaleStyles = tss.create(({ theme }) => ({
  itemContainer: {
    maxWidth: "40em",
  },
  rowContainer: {
    padding: "0 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1.5em",
    },
  },
}));
