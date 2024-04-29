import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useContactPageStyles } from "./ContactPage.config";

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const { classes } = useContactPageStyles();
  return (
    <Grid item container style={{ marginTop: "-1em" }}>
      <Grid item container direction="column" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.blue }}
          >
            We're waiting.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container className={classes.bg} lg={9}></Grid>
    </Grid>
  );
};

export default ContactPage;
