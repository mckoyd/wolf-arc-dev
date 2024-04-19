import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

import RevolutionBackground from "../assets/images/repeatingBackground.svg";

export const useRevolutionBlockStyles = tss.create(({ theme }) => ({
  learnButtonRevolution: {
    ...(theme.typography.learnBtn as CSSProperties),
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  revolutionBackground: {
    backgroundImage: `url(${RevolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
    },
  },
}));
