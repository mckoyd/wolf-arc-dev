import { tss } from "tss-react/mui";
import BackgroundImg from "../assets/images/background.jpg";

export const useContactPageStyles = tss.create(({ theme }) => ({
  bg: {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
}));
