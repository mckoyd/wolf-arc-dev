import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomSoftwareBlock from "../components/CustomSoftwareBlock";
import IOSAndroidBlock from "../components/IOSAndroidBlock";
import WebsitesBlock from "../components/WebsitesBlock";

const ServicesPage: React.FC = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h2"></Typography>
      </Grid>
      <Grid item container direction={"column"}>
        <IOSAndroidBlock />
        <CustomSoftwareBlock />
        <WebsitesBlock justify="flex-end" />
      </Grid>
    </Grid>
  );
};

export default ServicesPage;
