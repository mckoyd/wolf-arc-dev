import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

import LightBulb from "../assets/images/bulb.svg";
import StopWatch from "../assets/images/stopwatch.svg";
import Cash from "../assets/images/cash.svg";
import { useMiddleIconsStyles } from "./MiddleIcons.config";

const MiddleIcons: FC = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = useMiddleIconsStyles();

  return (
    <Grid
      item
      container
      justifyContent={"center"}
      style={{ marginTop: "15em", marginBottom: "20em" }}
      className={classes.rowContainer}
    >
      <Grid
        item
        container
        direction={"column"}
        md
        style={{ maxWidth: "40em" }}
        alignItems={"center"}
      >
        <Grid item>
          <Typography variant="h4">Save Energy</Typography>
        </Grid>
        <Grid item>
          <img src={LightBulb} alt="lightbulb" />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={"column"}
        md
        style={{ maxWidth: "40em", margin: matchesSM ? "10em 0" : 0 }}
        alignItems={"center"}
      >
        <Grid item>
          <Typography variant="h4">Save Time</Typography>
        </Grid>
        <Grid item>
          <img src={StopWatch} alt="stopwatch" />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={"column"}
        md
        style={{ maxWidth: "40em" }}
        alignItems={"center"}
      >
        <Grid item>
          <Typography variant="h4">Save Money</Typography>
        </Grid>
        <Grid item>
          <img src={Cash} alt="cash" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MiddleIcons;
