import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import Roots from "../assets/images/root.svg";
import { useRootAnalysisStyles } from "./RootAnalysis.config";

const RootAnalysis: FC = () => {
  const { classes } = useRootAnalysisStyles();
  return (
    <Grid item container justifyContent={"center"} style={{ margin: "20em 0" }}>
      <Grid item container direction={"column"} alignItems={"center"}>
        <Grid item>
          <img
            src={Roots}
            alt={"tree with roots extending out"}
            height={"450em"}
            width={"450em"}
          />
        </Grid>
      </Grid>
      <Grid item className={classes.itemContainer}>
        <Typography variant="h4" align="center" gutterBottom>
          Root Cause Analysis
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Many problems are merely symptoms of larger, underlying issues.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We can help you thoroughly examine all areas of your business to
          develop a holistic plan for the most effective implementation of
          technology.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RootAnalysis;
