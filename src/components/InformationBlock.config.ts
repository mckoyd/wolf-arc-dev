import { tss } from "tss-react/mui";
import InformationBackground from "../assets/images/infoBackground.svg";
import { CSSProperties } from "react";

export const useInformationBlockStyles = tss.create(({ theme }) => ({
  aboutUsText: {
    color: "white",
  },
  informationBackground: {
    backgroundImage: `url(${InformationBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infoButtonRevolution: {
    ...(theme.typography.learnBtn as CSSProperties),
    fontSize: "0.9rem",
    height: 45,
    width: 145,
    color: "white",
    borderColor: "white",
  },
}));
