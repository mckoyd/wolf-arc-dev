import { tss } from "tss-react/mui";

export const useAboutUsStyles = tss.create(({ theme }) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    padding: "0 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1.5em",
    },
  },
  avatar: {
    height: "25em",
    width: "25em",
  },
}));
