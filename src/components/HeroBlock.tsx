import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useHeroBlockStyles } from "./HeroBlock.config.ts";
import ButtonArrow from "./ButtonArrow";

import animationData from "../assets/animations/landinganimation/data.js";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

const HeroBlock: React.FC = () => {
  const theme = useTheme();
  const { classes } = useHeroBlockStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid item>
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        direction="row"
      >
        <Grid item sm className={classes.heroTextContainer}>
          <Typography variant="h2" align="center">
            Bringing West Coast Technology
            <br />
            to the Midwest
          </Typography>
          <Grid
            container
            justifyContent="center"
            className={classes.buttonContainer}
          >
            <Grid item>
              <Button
                variant="contained"
                component={Link}
                to="/estimate"
                className={classes.estimateButton}
              >
                Free Estimate
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                component={Link}
                to="/revolution"
                className={classes.learnButtonHero}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width="15"
                  height="15"
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm className={classes.animationContainer}>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroBlock;
