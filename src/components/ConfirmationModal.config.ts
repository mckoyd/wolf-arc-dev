import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useConfirmationModalStyles = tss.create(({ theme }) => ({
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
