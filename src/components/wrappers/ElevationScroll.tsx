import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { IWrapper } from "../../interfaces";

const ElevationScroll: React.FC<IWrapper> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;
