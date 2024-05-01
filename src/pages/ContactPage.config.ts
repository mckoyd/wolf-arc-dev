import { tss } from "tss-react/mui";
import BackgroundImg from "../assets/images/background.jpg";
import MobileBackgroundImg from "../assets/images/mobileBackground.jpg";
import { CSSProperties } from "react";

export const useContactPageStyles = tss.create(({ theme }) => ({
  bg: {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${MobileBackgroundImg})`,
    },
  },
  callToActionBtn: {
    ...(theme.typography.learnBtn as CSSProperties),
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
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
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendBtn: {
    ...(theme.typography.estimateBtn as CSSProperties),
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));
