import React from "react";
import { useCallToActionStyles } from "./CallToAction.config";
import {
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ButtonArrow from "./ButtonArrow";
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = useCallToActionStyles();
  return (
    <Grid
      container
      className={classes.background}
      alignItems={"center"}
      justifyContent={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction={"column"}>
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid
              container
              justifyContent={matchesSM ? "center" : undefined}
              item
            >
              <Button
                variant="outlined"
                className={classes.callToActionBtn}
                component={Link}
                to="/revolution"
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width="15"
                  height="15"
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          component={Link}
          to="/estimate"
          className={classes.estimateBtn}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
