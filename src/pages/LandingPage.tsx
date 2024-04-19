import React from "react";

import Grid from "@mui/material/Grid";

import { useLandingPageStyles } from "./LandingPage.config.ts";
import { useTheme } from "@mui/material/styles";
import HeroBlock from "../components/HeroBlock.tsx";

import useMediaQuery from "@mui/material/useMediaQuery";
import CustomSoftwareBlock from "../components/CustomSoftwareBlock.tsx";
import Typography from "@mui/material/Typography";
import IOSAndroidBlock from "../components/IOSAndroidBlock.tsx";
import WebsitesBlock from "../components/WebsitesBlock.tsx";
import RevolutionBlock from "../components/RevolutionBlock.tsx";

const LandingPage: React.FC = () => {
  const theme = useTheme();
  const { classes } = useLandingPageStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <HeroBlock />
      <CustomSoftwareBlock />
      <IOSAndroidBlock />
      <WebsitesBlock />
      <RevolutionBlock />
    </Grid>
  );
};

export default LandingPage;
