import React from "react";
import { useCallToActionStyles } from "./CallToAction.config";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import ButtonArrow from "./ButtonArrow";

const CallToAction: React.FC = () => {
  const theme = useTheme();
  const { classes } = useCallToActionStyles();
  return (
    <Grid
      container
      className={classes.background}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Grid item style={{ marginLeft: "5em" }}>
        <Grid container direction={"column"}>
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container item>
              <Button variant="outlined" className={classes.callToActionBtn}>
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
        <Button variant="contained" className={classes.estimateBtn}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
