import { tss } from "tss-react/mui";

export const useHeaderStyles = tss.create(() => ({
  logo: {
    height: "7em",
    padding: 0,
  },

  tabsContainer: {
    marginLeft: "auto",
  },

  headerTab: {
    color: "white",
  },
}));
