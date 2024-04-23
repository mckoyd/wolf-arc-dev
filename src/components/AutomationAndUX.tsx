import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import { useAutomationAndUXStyles } from "./AutomationAndUX.config";
import Lottie from "react-lottie";
import automationAnimation from "../assets/animations/automationAnimation/data.json";
import uxAnimation from "../assets/animations/uxAnimation/data";

const AutomationAndUX: FC = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useAutomationAndUXStyles();

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      item
      container
      justifyContent={"space-around"}
      style={{ marginBottom: "20em" }}
      direction={matchesMD ? "column" : "row"}
      alignItems={matchesMD ? "center" : undefined}
      className={classes.rowContainer}
    >
      <Grid
        item
        container
        className={classes.itemContainer}
        md
        style={{ marginBottom: matchesMD ? "15em" : 0 }}
        direction={matchesMD ? "column" : "row"}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4">Automation</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Why waste time when you don’t have to?
            </Typography>
            <Typography variant="body1" paragraph>
              We can help you identify processes with time or event based
              actions which can now easily be automated.
            </Typography>
            <Typography variant="body1" paragraph>
              Increasing efficiency increases profits, leaving you more time to
              focus on your business, not busywork.
            </Typography>
          </Grid>
        </Grid>

        <Grid item md>
          <Lottie
            options={automationOptions}
            style={{ maxWidth: 275, maxHeight: 275, minHeight: 250 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.itemContainer}
        md
        direction={matchesMD ? "column" : "row"}
      >
        <Grid item md>
          <Lottie
            options={uxOptions}
            style={{ maxWidth: 280, maxHeight: 260 }}
          />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align="right">
              User Experience Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph align="right">
              A good design that isn’t usable isn’t a good design.
            </Typography>
            <Typography variant="body1" paragraph align="right">
              So why are so many pieces of software complicated, confusing, and
              frustrating?
            </Typography>
            <Typography variant="body1" paragraph align="right">
              By prioritizing users and the real ways they interact with
              technology we’re able to develop unique, personable experiences
              that solve problems rather than create new ones.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AutomationAndUX;
