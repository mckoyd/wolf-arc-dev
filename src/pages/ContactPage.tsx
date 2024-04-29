import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useContactPageStyles } from "./ContactPage.config";
import PhoneIcon from "../assets/images/phone.svg";
import EmailIcon from "../assets/images/email.svg";

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const { classes } = useContactPageStyles();
  return (
    <Grid item container style={{ marginTop: "-1em" }}>
      <Grid item container direction="column" justifyContent={"center"} lg={3}>
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
        <Grid item container>
          <Grid item>
            <img src={PhoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              (555) 555-5555
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <img
              src={EmailIcon}
              alt="envelope"
              style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              zachary@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.bg} lg={9}></Grid>
    </Grid>
  );
};

export default ContactPage;
