import { tss } from "tss-react/mui";

export const useDocumentAndScaleStyles = tss.create(({ theme }) => ({
  itemContainer: {
    maxWidth: "40em",
  },
}));
