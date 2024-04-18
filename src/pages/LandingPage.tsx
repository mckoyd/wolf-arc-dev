import React from "react";

import Grid from "@mui/material/Grid";

import { useLandingPageStyles } from "./LandingPage.config.ts";
import { useTheme } from "@mui/material/styles";
import HeroBlock from "../components/HeroBlock.tsx";

import useMediaQuery from "@mui/material/useMediaQuery";
import ServicesBlock from "../components/ServicesBlock.tsx";

const LandingPage: React.FC = () => {
  const theme = useTheme();
  const { classes } = useLandingPageStyles();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <HeroBlock />
      <ServicesBlock />
    </Grid>
  );
};

export default LandingPage;
