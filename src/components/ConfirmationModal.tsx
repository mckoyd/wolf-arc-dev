import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { IConfirmationModal } from "../interfaces";
import { useConfirmationModalStyles } from "./ConfirmationModal.config";
import AirplaneIcon from "../assets/images/send.svg";

const ConfirmationModal: React.FC<IConfirmationModal> = ({
  openConfirmationModal,
  handleCloseConfirmationModal,
  handleFormInputChange,
  email,
  emailHelper,
  phone,
  phoneHelper,
  message,
  name,
  handleSendMessageBtn,
}) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXM = useMediaQuery(theme.breakpoints.down("xs"));

  const { classes } = useConfirmationModalStyles();

  return (
    <Dialog
      open={openConfirmationModal}
      onClose={handleCloseConfirmationModal}
      style={{ zIndex: 1302 }}
      PaperProps={{
        style: {
          padding: matchesMD ? "1em 0" : "5em 20em",
        },
      }}
      fullScreen={matchesSM}
    >
      <DialogContent>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Confirm Message
            </Typography>
          </Grid>

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
          <Grid item style={{ maxWidth: matchesSM ? "100%" : "20em" }}>
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
          <Grid
            item
            container
            style={{ marginTop: "2em" }}
            alignItems={"center"}
            direction={matchesXM ? "column" : "row"}
          >
            <Grid item>
              <Button
                color="primary"
                onClick={handleCloseConfirmationModal}
                style={{ fontWeight: 300 }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                className={classes.sendBtn}
                onClick={handleSendMessageBtn}
              >
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
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
