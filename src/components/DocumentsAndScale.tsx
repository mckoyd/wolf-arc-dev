import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import { useDocumentAndScaleStyles } from "./DocumentsAndScale.config";
import Lottie from "react-lottie";
import documentsAnimation from "../assets/animations/documentsAnimation/data";
import scaleAnimation from "../assets/animations/scaleAnimation/data.json";

const DocumentsAndScale: FC = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = useDocumentAndScaleStyles();
  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      item
      container
      justifyContent={"space-around"}
      direction={matchesMD ? "column" : "row"}
      alignItems={matchesMD ? "center" : undefined}
      className={classes.rowContainer}
    >
      <Grid
        item
        container
        className={classes.itemContainer}
        md
        direction={matchesMD ? "column" : "row"}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align={matchesSM ? "center" : undefined}>
              Digital Documents & Data
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              Reduce Errors. Reduce Waste. Reduce Costs.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              Billions are spent annually on the purchasing, printing, and
              distribution of paper. On top of the massive environmental impact
              this has, it causes harm to your bottom line as well.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              By utilizing digital forms and documents you can remove these
              obsolete expenses, accelerate your communication, and help the
              Earth.
            </Typography>
          </Grid>
        </Grid>

        <Grid item md>
          <Lottie
            options={documentsOptions}
            style={{ maxWidth: 275, maxHeight: 275, minHeight: 250 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.itemContainer}
        md
        direction={matchesMD ? "column" : "row"}
      >
        <Grid item md>
          <Lottie
            options={scaleOptions}
            style={{ maxWidth: 280, maxHeight: 260 }}
          />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align={matchesSM ? "center" : "right"}>
              Scale
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : "right"}
            >
              Whether you’re a large brand, just getting started, or taking off
              right now, our application architecture ensures pain-free growth
              and reliability.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DocumentsAndScale;
