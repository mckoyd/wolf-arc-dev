import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useHeaderStyles = tss.create(({ theme }) => ({
  logo: {
    height: "7em",
    padding: 0,
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
