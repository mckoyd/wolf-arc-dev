import {
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useInformationBlockStyles } from "./InformationBlock.config";
import ButtonArrow from "./ButtonArrow";
import { Link } from "react-router-dom";

const InformationBlock: React.FC = () => {
  const { classes } = useInformationBlockStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item>
      <Grid container style={{ height: "80em" }} alignItems={"center"}>
        <Grid
          item
          container
          style={{
            position: "absolute",
            textAlign: matchesSM ? "center" : "inherit",
          }}
          direction={matchesSM ? "column" : "row"}
          spacing={matchesSM ? 10 : 0}
        >
          <Grid
            item
            sm
            style={{
              marginLeft: matchesSM ? "0" : "5em",
              textAlign: matchesSM ? "center" : "left",
            }}
          >
            <Grid item container direction="column">
              <Typography variant="h2" className={classes.aboutUsText}>
                About Us
              </Typography>
              <Typography variant="subtitle2">Let's get personal.</Typography>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.infoButtonRevolution}
                  component={Link}
                  to="/about"
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width="15" height="15" fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sm
            style={{
              marginRight: matchesSM ? "0" : "5em",
              textAlign: matchesSM ? "center" : "right",
            }}
          >
            <Grid item container direction="column">
              <Typography variant="h2" className={classes.aboutUsText}>
                Contact Us
              </Typography>
              <Typography variant="subtitle2">
                Say hello{" "}
                <span role="img" aria-label="waving hand">
                  👋🏼
                </span>
              </Typography>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.infoButtonRevolution}
                  component={Link}
                  to="/contact"
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width="15" height="15" fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <div className={classes.informationBackground} />
      </Grid>
    </Grid>
  );
};

export default InformationBlock;
