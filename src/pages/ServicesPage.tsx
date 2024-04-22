import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import CustomSoftwareBlock from "../components/CustomSoftwareBlock";
import IOSAndroidBlock from "../components/IOSAndroidBlock";
import WebsitesBlock from "../components/WebsitesBlock";
import { useServicesPageStyles } from "./ServicesPage.config";

const ServicesPage: React.FC = () => {
  const { classes } = useServicesPageStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column" className={classes.servicesContainer}>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? undefined : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item container direction={"column"}>
        <IOSAndroidBlock reduceMargin />
        <CustomSoftwareBlock />
        <WebsitesBlock justify="flex-end" />
      </Grid>
    </Grid>
  );
};

export default ServicesPage;
