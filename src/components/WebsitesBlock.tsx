import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useWebsitesBlockStyles } from "./WebsitesBlock.config";
import WebsiteIcon from "../assets/images/websiteIcon.svg";

const WebsitesBlock: React.FC = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = useWebsitesBlockStyles();
  return (
    <Grid item>
      <Grid
        container
        direction={"row"}
        justifyContent={matchesSM ? "center" : "flex-start"}
        className={classes.websitesContainer}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
            marginLeft: matchesSM ? 0 : "5em",
          }}
        >
          <Typography variant="h4">Website Development</Typography>
          <Typography variant="subtitle1">
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant="subtitle1">
            Optimized for Search Engines, built for speed.
          </Typography>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : "2em" }}>
          <img alt="website icon" src={WebsiteIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WebsitesBlock;
