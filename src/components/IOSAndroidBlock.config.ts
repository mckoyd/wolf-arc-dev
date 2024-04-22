import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useIOSAndroidBlockStyles = tss.create(({ theme }) => ({
  iOSAndroidContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  mobileAppsBtn: {
    ...(theme.typography.learnBtn as CSSProperties),
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
}));
