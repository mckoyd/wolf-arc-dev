import { FC } from "react";
import { useMobileAppsStyles } from "./MobileApps.config";
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

import BackArrow from "../assets/images/backArrow.svg";
import ForwardArrow from "../assets/images/forwardArrow.svg";
import integrationAnimationData from "../assets/animations/integrationAnimation/data.json";
import Lottie from "react-lottie";
import SwissKnifeImg from "../assets/images/swissKnife.svg";
import ExtendAccessImg from "../assets/images/extendAccess.svg";
import EngagementImg from "../assets/images/increaseEngagement.svg";
import CallToAction from "../components/CallToAction";

const MobileApps: FC = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = useMobileAppsStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction={"row"}
        justifyContent={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesSM ? "1em" : "2em" }}
      >
        <Grid
          item
          className={classes.arrowContainer}
          style={{
            marginRight: "1em",
            marginLeft: "-3.5em",
          }}
        >
          <IconButton
            component={Link}
            to="/customsoftware"
            className={classes.arrowBtn}
            style={{ display: matchesMD ? "none" : undefined }}
          >
            <img
              src={BackArrow}
              alt="Back to Custom Software Development Page"
            />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            className={classes.arrowBtn}
            component={Link}
            to="/websites"
            style={{ display: matchesMD ? "none" : undefined }}
          >
            <img src={ForwardArrow} alt="Forward to Website Development" />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ margin: "15em 0" }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesSM ? "center" : undefined}
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesSM ? "center" : "right"}
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "right"}
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "right"}
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ margin: matchesMD ? "15em 0" : 0 }}
        md
      >
        <Grid item container md direction={"column"} alignItems={"center"}>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={SwissKnifeImg} alt="picture of a swiss army knife" />
          </Grid>
        </Grid>
        <Grid item container md direction={"column"} alignItems={"center"}>
          <Typography align="center" variant="h4" gutterBottom>
            Extend Access
          </Typography>
          <Grid item>
            <img
              src={ExtendAccessImg}
              alt="tear-one-off sign"
              style={{ maxWidth: matchesSM ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid item container md direction={"column"} alignItems={"center"}>
          <Typography align="center" variant="h4" gutterBottom>
            Increase Engagement
          </Typography>
          <Grid item>
            <img src={EngagementImg} alt="app with notification" />
          </Grid>
        </Grid>
      </Grid>

      <CallToAction />
    </Grid>
  );
};

export default MobileApps;
