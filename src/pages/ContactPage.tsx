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
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { classes } = useContactPageStyles();

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [phoneHelper, setPhoneHelper] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailHelper, setEmailHelper] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleFormInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let valid;
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email address");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid phone number");
        } else {
          setPhoneHelper("");
        }
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
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
        style={{
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
          marginBottom: matchesMD ? "5em" : 0,
        }}
      >
        <Grid item>
          <Grid item container direction={"column"}>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.blue }}
                align={matchesMD ? "center" : undefined}
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
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item marginBottom={"0.5em"}>
                <TextField
                  label="Name"
                  id="name"
                  variant="standard"
                  value={name}
                  onChange={handleFormInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item marginBottom={"0.5em"}>
                <TextField
                  label="Email"
                  id="email"
                  variant="standard"
                  value={email}
                  onChange={handleFormInputChange}
                  fullWidth
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                />
              </Grid>
              <Grid item marginBottom={"0.5em"}>
                <TextField
                  label="Phone"
                  id="phone"
                  variant="standard"
                  value={phone}
                  onChange={handleFormInputChange}
                  fullWidth
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                value={message}
                id="message"
                onChange={handleFormInputChange}
                variant="standard"
                multiline
                rows={10}
                className={classes.message}
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
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
        direction={matchesMD ? "column" : "row"}
        className={classes.bg}
        lg={8}
        xl={9}
        alignItems={"center"}
        justifyContent={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction={"column"}>
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
                align={matchesMD ? "center" : undefined}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid
                container
                justifyContent={matchesMD ? "center" : undefined}
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
