import { tss } from "tss-react/mui";

export const useWebsitesBlockStyles = tss.create(({ theme }) => ({
  websitesContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));
