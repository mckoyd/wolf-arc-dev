import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ButtonArrow from "./ButtonArrow";
import { useRevolutionBlockStyles } from "./RevolutionBlock.config";
import { Link } from "react-router-dom";

const RevolutionBlock: React.FC = () => {
  const theme = useTheme();
  const { classes } = useRevolutionBlockStyles();

  return (
    <Grid item>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{ height: "100em", marginTop: "12em" }}
      >
        <Card className={classes.revolutionCard}>
          <CardContent>
            <Grid container direction="column" style={{ textAlign: "center" }}>
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Visionary insights coupled with cutting-edge technology is a
                  recipe for revolution.
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.learnButtonRevolution}
                  component={Link}
                  to="/revolution"
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width="15"
                    height="15"
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={classes.revolutionBackground} />
      </Grid>
    </Grid>
  );
};

export default RevolutionBlock;
