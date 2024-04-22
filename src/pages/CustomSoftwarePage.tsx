import { Grid, IconButton, Typography } from "@mui/material";
import { FC } from "react";

import BackArrow from "../assets/images/backArrow.svg";
import ForwardArrow from "../assets/images/forwardArrow.svg";
import { Link } from "react-router-dom";
import { useCustomSoftwarePageStyles } from "./CustomSoftwarePage.config";
import LightBulb from "../assets/images/bulb.svg";
import Cash from "../assets/images/cash.svg";
import StopWatch from "../assets/images/stopwatch.svg";

const CustomSoftwarePage: FC = () => {
  const { classes } = useCustomSoftwarePageStyles();
  return (
    <Grid direction="column" container className={classes.mainContainer}>
      <Grid item container direction={"row"}>
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: "1em", marginLeft: "-3.5em" }}
        >
          <IconButton
            component={Link}
            to="/services"
            className={classes.arrowBtn}
          >
            <img src={BackArrow} alt="back to services page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant="body1" paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography variant="body1" paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant="body1" paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            className={classes.arrowBtn}
            component={Link}
            to="/mobileapps"
          >
            <img src={ForwardArrow} alt="forward arrow" />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        item
        container
        justifyContent={"center"}
        style={{ marginTop: "15em", marginBottom: "20em" }}
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
          style={{ maxWidth: "40em" }}
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
    </Grid>
  );
};

export default CustomSoftwarePage;
