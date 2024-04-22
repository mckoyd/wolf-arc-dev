import { Button, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useWebsitesBlockStyles } from "./WebsitesBlock.config";
import WebsiteIcon from "../assets/images/websiteIcon.svg";
import ButtonArrow from "./ButtonArrow";
import { Link } from "react-router-dom";
import { IWebsitesBlock } from "../interfaces";

const WebsitesBlock: React.FC<IWebsitesBlock> = ({ justify }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = useWebsitesBlockStyles();
  return (
    <Grid
      item
      style={{
        ...(Boolean(justify) && {
          marginRight: matchesSM ? 0 : "5em",
          marginBottom: "10em",
        }),
      }}
    >
      <Grid
        container
        direction={"row"}
        justifyContent={matchesSM ? "center" : justify || "flex-start"}
        className={classes.websitesContainer}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
            ...(!Boolean(justify) && { marginLeft: matchesSM ? 0 : "5em" }),
            width: matchesSM ? undefined : "35em",
          }}
        >
          <Typography variant="h4">Website Development</Typography>
          <Typography variant="subtitle1">
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant="subtitle1">
            Optimized for Search Engines, built for speed.
          </Typography>
          <Button
            variant="outlined"
            className={classes.websitesBtn}
            component={Link}
            to="/websites"
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow
              width="15"
              height="15"
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : "2em" }}>
          <img alt="website icon" src={WebsiteIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WebsitesBlock;
