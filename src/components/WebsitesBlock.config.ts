import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useWebsitesBlockStyles = tss.create(({ theme }) => ({
  websitesContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  websitesBtn: {
    ...(theme.typography.learnBtn as CSSProperties),
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
}));
