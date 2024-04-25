import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useWebsitesPageStyles } from "./WebsitesPage.config";
import { Link } from "react-router-dom";
import BackArrow from "../assets/images/backArrow.svg";
import ForwardArrow from "../assets/images/forwardArrow.svg";
import AnaylticsImg from "../assets/images/analytics.svg";
import ECommerceImg from "../assets/images/ecommerce.svg";
import OutreachImg from "../assets/images/outreach.svg";
import SEOImg from "../assets/images/seo.svg";

const WebsitesPage: React.FC = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { classes } = useWebsitesPageStyles();
  return (
    <Grid container direction={"column"}>
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
            to="/mobileapps"
            className={classes.arrowBtn}
            style={{ display: matchesMD ? "none" : undefined }}
          >
            <img
              src={BackArrow}
              alt="Back to iOS/Android App Development Page"
            />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            className={classes.arrowBtn}
            component={Link}
            to="/services"
            style={{ display: matchesMD ? "none" : undefined }}
          >
            <img src={ForwardArrow} alt="Forward to Services Page" />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={"row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={AnaylticsImg}
                alt="bar graph with magnifying glass revealing 1's and 0's"
                style={{ marginLeft: "-2.75em" }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography
            variant="body1"
            paragraph
            className={classes.paragraphContainer}
          >
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WebsitesPage;
