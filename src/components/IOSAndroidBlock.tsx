import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useIOSAndroidBlockStyles } from "./IOSAndroidBlock.config";
import MobileAppsIcon from "../assets/images/mobileIcon.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonArrow from "./ButtonArrow";
import { IIOSAndroidBlock } from "../interfaces";

const IOSAndroidBlock: React.FC<IIOSAndroidBlock> = ({ reduceMargin }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = useIOSAndroidBlockStyles();
  return (
    <Grid item>
      <Grid
        style={{
          ...(reduceMargin && { marginTop: "5em" }),
        }}
        container
        direction={"row"}
        justifyContent={matchesSM ? "center" : "flex-end"}
        className={classes.iOSAndroidContainer}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
            width: matchesSM ? undefined : "35em",
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
          <Button
            variant="outlined"
            className={classes.mobileAppsBtn}
            component={Link}
            to="/mobileapps"
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow
              width="15"
              height="15"
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
          <img alt="mobile apps icon" src={MobileAppsIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IOSAndroidBlock;
