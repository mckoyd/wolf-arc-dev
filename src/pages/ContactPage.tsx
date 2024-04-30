import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useContactPageStyles } from "./ContactPage.config";
import PhoneIcon from "../assets/images/phone.svg";
import EmailIcon from "../assets/images/email.svg";
import AirplaneIcon from "../assets/images/send.svg";
import { Link } from "react-router-dom";
import ButtonArrow from "../components/ButtonArrow";

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { classes } = useContactPageStyles();

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value);
  };

  return (
    <Grid item container style={{ marginTop: "-1em" }}>
      <Grid
        item
        container
        direction="column"
        justifyContent={"center"}
        alignItems={"center"}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid item container direction={"column"}>
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
            <Grid item container marginTop={"2em"}>
              <Grid item>
                <img
                  src={PhoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
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
            <Grid item container marginBottom={"2em"}>
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
            <Grid item container style={{ maxWidth: "20em" }}>
              <Grid item>
                <TextField
                  label="Name"
                  id="name"
                  variant="standard"
                  value={name}
                  onChange={handleNameChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  id="email"
                  variant="standard"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Phone"
                  id="phone"
                  variant="standard"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                value={message}
                id="message"
                onChange={handleMessageChange}
                variant="standard"
                multiline
                rows={10}
                className={classes.message}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item container justifyContent={"center"} marginTop={"2em"}>
              <Button variant="contained" className={classes.sendBtn}>
                Send Message{" "}
                <img
                  src={AirplaneIcon}
                  alt="airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.bg}
        lg={8}
        xl={9}
        alignItems={"center"}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "3em",
            textAlign: matchesSM ? "center" : "inherit",
          }}
        >
          <Grid container direction={"column"}>
            <Grid item>
              <Typography variant="h2">
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                Take advantage of the 21st Century.
              </Typography>
              <Grid
                container
                justifyContent={matchesSM ? "center" : undefined}
                item
              >
                <Button
                  variant="outlined"
                  className={classes.callToActionBtn}
                  component={Link}
                  to="/revolution"
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width="15"
                    height="15"
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            component={Link}
            to="/estimate"
            className={classes.estimateBtn}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
