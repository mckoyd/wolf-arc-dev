import { tss } from "tss-react/mui";

export const useIOSAndroidBlockStyles = tss.create(({ theme }) => ({
  iOSAndroidContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));
