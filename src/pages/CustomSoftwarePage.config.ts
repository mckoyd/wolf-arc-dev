import { tss } from "tss-react/mui";

export const useCustomSoftwarePageStyles = tss.create(({ theme }) => ({
  mainContainer: {
    padding: "2em 5em 10em 5em",
  },
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  arrowBtn: {
    "&:hover": {
      background: "transparent",
    },
  },
}));
