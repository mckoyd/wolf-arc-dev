import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useIOSAndroidBlockStyles } from "./IOSAndroidBlock.config";
import MobileAppsIcon from "../assets/images/mobileIcon.svg";

const IOSAndroidBlock: React.FC = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = useIOSAndroidBlockStyles();
  return (
    <Grid item>
      <Grid
        container
        direction={"row"}
        justifyContent={matchesSM ? "center" : "flex-end"}
        className={classes.iOSAndroidContainer}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
          }}
        >
          <Typography variant="h4">iOS/Android App Development</Typography>
          <Typography variant="subtitle1">
            Extend Functionality. Extend Access. Increase Engagement.
          </Typography>
          <Typography variant="subtitle1">
            Integrate your web experience or create a standalone{" "}
            {matchesSM ? <br /> : null}with either mobile platform.
          </Typography>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
          <img alt="mobile apps icon" src={MobileAppsIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IOSAndroidBlock;
