import { CSSProperties } from "react";
import { tss } from "tss-react/mui";

export const useAppStyles = tss.create(({ theme }) => ({
  toolbarMargin: {
    ...(theme.mixins.toolbar as CSSProperties),
  },
}));
