import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { useCustomSoftwareHeadingStyles } from "./CustomSoftwareHeading.config";
import { Link } from "react-router-dom";

import BackArrow from "../assets/images/backArrow.svg";
import ForwardArrow from "../assets/images/forwardArrow.svg";

const CustomSoftwareHeading: FC = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useCustomSoftwareHeadingStyles();

  return (
    <Grid
      item
      container
      direction={"row"}
      justifyContent={matchesMD ? "center" : undefined}
    >
      <Grid
        item
        className={classes.arrowContainer}
        style={{
          marginRight: "1em",
          marginLeft: "-3.5em",
        }}
      >
        <IconButton
          component={Link}
          to="/services"
          className={classes.arrowBtn}
          style={{ display: matchesMD ? "none" : undefined }}
        >
          <img src={BackArrow} alt="back to services page" />
        </IconButton>
      </Grid>
      <Grid item container direction="column" className={classes.heading}>
        <Grid item>
          <Typography variant="h2" align={matchesMD ? "center" : undefined}>
            Custom Software Development
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? "center" : undefined}
          >
            Whether we’re replacing old software or inventing new solutions, Arc
            Development is here to help your business tackle technology.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? "center" : undefined}
          >
            Using regular commercial software leaves you with a lot of stuff you
            don’t need, without some of the stuff you do need, and ultimately
            controls the way you work. Without using any software at all you
            risk falling behind competitors and missing out on huge savings from
            increased efficiency.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? "center" : undefined}
          >
            Our custom solutions are designed from the ground up with your
            needs, wants, and goals at the core. This collaborative process
            produces finely tuned software that is much more effective at
            improving your workflow and reducing costs than generalized options.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? "center" : undefined}
          >
            We create exactly what you what, exactly how you want it.
          </Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.arrowContainer}>
        <IconButton
          className={classes.arrowBtn}
          component={Link}
          to="/mobileapps"
          style={{ display: matchesMD ? "none" : undefined }}
        >
          <img src={ForwardArrow} alt="forward arrow" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CustomSoftwareHeading;
