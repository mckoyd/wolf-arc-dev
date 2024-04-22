import { Grid, IconButton, Typography } from "@mui/material";
import { FC } from "react";

import BackArrow from "../assets/images/backArrow.svg";
import ForwardArrow from "../assets/images/forwardArrow.svg";
import { Link } from "react-router-dom";
import { useCustomSoftwarePageStyles } from "./CustomSoftwarePage.config";
import LightBulb from "../assets/images/bulb.svg";
import Cash from "../assets/images/cash.svg";
import StopWatch from "../assets/images/stopwatch.svg";
import documentsAnimation from "../assets/animations/documentsAnimation/data";
import scaleAnimation from "../assets/animations/scaleAnimation/data.json";
import Lottie from "react-lottie";

const CustomSoftwarePage: FC = () => {
  const { classes } = useCustomSoftwarePageStyles();

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

      <Grid item container>
        <Grid item container className={classes.itemContainer}>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body1" paragraph>
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography variant="body1" paragraph>
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxWidth: 275, maxHeight: 325, minHeight: 275 }}
            />
          </Grid>
        </Grid>

        <Grid item container className={classes.itemContainer}>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxWidth: 280, maxHeight: 260 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="right">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align="right">
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftwarePage;
