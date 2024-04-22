import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material/styles";
import CustomSoftwareIcon from "../assets/images/Custom Software Icon.svg";
import { useCustomSoftwareBlockStyles } from "./CustomSoftwareBlock.config";
import { Link } from "react-router-dom";

const CustomSoftwareBlock: React.FC = () => {
  const theme = useTheme();
  const { classes } = useCustomSoftwareBlockStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid item>
      <Grid
        container
        direction="row"
        className={classes.servicesContainer}
        justifyContent={matchesSM ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
            width: matchesSM ? undefined : "35em",
          }}
        >
          <Typography variant="h4">Custom Software Development</Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Save Energy. Save Time. Save Money.
          </Typography>
          <Typography variant="subtitle1">
            Complete digital solutions, from investigation to{" "}
            <span className={classes.specialText}>celebration.</span>
          </Typography>
          <Button
            variant="outlined"
            className={classes.learnButton}
            component={Link}
            to="/customsoftware"
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow
              width={"10"}
              height={"10"}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img
            className={classes.icon}
            alt="custom software icon"
            src={CustomSoftwareIcon}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftwareBlock;
