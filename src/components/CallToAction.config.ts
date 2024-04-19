import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

import Background from "../assets/images/background.jpg";
import MobileBackground from "../assets/images/mobileBackground.jpg";

export const useCallToActionStyles = tss.create(({ theme }) => ({
  callToActionBtn: {
    ...(theme.typography.learnBtn as CSSProperties),
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${MobileBackground})`,
    },
  },
  estimateBtn: {
    ...(theme.typography.estimateBtn as CSSProperties),
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
  },
}));
