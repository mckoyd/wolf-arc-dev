import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useHeaderStyles = tss.create(({ theme }) => ({
  logoBtn: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  logo: {
    height: "7em",
  },

  tabsContainer: {
    marginLeft: "auto",
  },

  headerTab: {
    ...(theme.typography.headerTab as CSSProperties),
    minWidth: 10,
    marginLeft: "25px",

    "&.Mui-selected": {
      color: "white",
      fontWeight: 900,
    },
  },

  estimateBtn: {
    ...(theme.typography.estimateBtn as CSSProperties),
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));
