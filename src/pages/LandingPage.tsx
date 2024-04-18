import React from "react";

import Grid from "@mui/material/Grid";

import { useLandingPageStyles } from "./LandingPage.config.ts";
import { useTheme } from "@mui/material/styles";
import HeroBlock from "../components/HeroBlock.tsx";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ButtonArrow from "../components/ButtonArrow.tsx";
import CustomSoftwareIcon from "../assets/images/Custom Software Icon.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

const LandingPage: React.FC = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = useLandingPageStyles();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <HeroBlock />
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justifyContent={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={"10"}
                height={"10"}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={CustomSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
