import { tss } from "tss-react/mui";

export const useCustomSoftwareHeadingStyles = tss.create(({ theme }) => ({
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
