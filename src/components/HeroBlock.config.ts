import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useHeroBlockStyles = tss.create(({ theme }) => ({
  heroTextContainer: {
    minWidth: "21.5em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  estimateButton: {
    ...(theme.typography.estimateBtn as CSSProperties),
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...(theme.typography.learnBtn as CSSProperties),
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  animationContainer: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
}));
