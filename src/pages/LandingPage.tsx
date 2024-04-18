import React from "react";

import Grid from "@mui/material/Grid";

import { useLandingPageStyles } from "./LandingPage.config.ts";
import { useTheme } from "@mui/material/styles";
import HeroBlock from "../components/HeroBlock.tsx";

import useMediaQuery from "@mui/material/useMediaQuery";
import ServicesBlock from "../components/ServicesBlock.tsx";
import Typography from "@mui/material/Typography";
import MobileAppsIcon from "../assets/images/mobileIcon.svg";

const LandingPage: React.FC = () => {
  const theme = useTheme();
  const { classes } = useLandingPageStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <HeroBlock />
      <ServicesBlock />
      <Grid item>
        <Grid
          container
          direction={"row"}
          justifyContent={matchesSM ? "center" : "flex-end"}
          className={classes.iOSAndroidContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1">
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone{" "}
              {matchesSM ? <br /> : null}with either mobile platform.
            </Typography>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img alt="mobile apps icon" src={MobileAppsIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
