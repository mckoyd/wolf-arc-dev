import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

import { useCustomSoftwarePageStyles } from "./CustomSoftwarePage.config";

import CustomSoftwareHeading from "../components/CustomSoftwareHeading";
import MiddleIcons from "../components/MiddleIcons";
import DocumentsAndScale from "../components/DocumentsAndScale";
import RootAnalysis from "../components/RootAnalysis";
import AutomationAndUX from "../components/AutomationAndUX";
import CallToAction from "../components/CallToAction";

const CustomSoftwarePage: FC = () => {
  const { classes } = useCustomSoftwarePageStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid direction="column" container>
      <CustomSoftwareHeading />
      <MiddleIcons />
      <DocumentsAndScale />
      <RootAnalysis />
      <AutomationAndUX />
      <CallToAction />
    </Grid>
  );
};

export default CustomSoftwarePage;
