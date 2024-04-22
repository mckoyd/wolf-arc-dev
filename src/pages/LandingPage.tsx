import React from "react";

import Grid from "@mui/material/Grid";

import { useLandingPageStyles } from "./LandingPage.config.ts";
import HeroBlock from "../components/HeroBlock.tsx";

import CustomSoftwareBlock from "../components/CustomSoftwareBlock.tsx";
import IOSAndroidBlock from "../components/IOSAndroidBlock.tsx";
import WebsitesBlock from "../components/WebsitesBlock.tsx";
import RevolutionBlock from "../components/RevolutionBlock.tsx";
import InformationBlock from "../components/InformationBlock.tsx";
import CallToAction from "../components/CallToAction.tsx";

const LandingPage: React.FC = () => {
  const { classes } = useLandingPageStyles();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <HeroBlock />
      <CustomSoftwareBlock />
      <IOSAndroidBlock />
      <WebsitesBlock />
      <RevolutionBlock />
      <InformationBlock />
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
