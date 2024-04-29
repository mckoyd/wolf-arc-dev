import React from "react";
import {
  Avatar,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAboutUsStyles } from "./AboutUs";
import HistoryImg from "../assets/images/history.svg";
import FounderImg from "../assets/images/founder.jpg";
import YearbookImg from "../assets/images/yearbook.svg";
import PuppyImg from "../assets/images/puppy.svg";
import CallToAction from "../components/CallToAction";

const AboutUs: React.FC = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const { classes } = useAboutUsStyles();

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justifyContent={"space-around"}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        style={{ margin: "10em 0" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesMD ? "center" : undefined}
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
                align={matchesMD ? "center" : undefined}
              >
                We’re the new kid on the block.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent={"center"} lg>
            <img
              src={HistoryImg}
              alt="quill pen sitting on top of a book"
              style={{ maxHeight: matchesMD ? "12.5em" : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"column"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Zachary Reece, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when I was 9 years old.
          </Typography>
        </Grid>

        <Grid item>
          <Avatar src={FounderImg} alt="founder" className={classes.avatar} />
        </Grid>

        <Grid
          item
          lg
          style={{
            maxWidth: "45em",
            padding: "1.25em",
            display: matchesMD ? undefined : "none",
          }}
        >
          <Typography variant="body1" paragraph align="center">
            I taught myself basic coding from a library book in third grade, and
            ever since then my passion has solely been set on learning —
            learning about computers, learning mathematics and philosophy,
            studying design, always just learning.
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Now I’m ready to apply everything I’ve learned, and to help others
            with the
          </Typography>
        </Grid>

        <Grid item container justifyContent={matchesMD ? "center" : undefined}>
          <Grid item>
            <Grid
              item
              container
              direction="column"
              lg
              style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
            >
              <Grid item>
                <img
                  src={YearbookImg}
                  alt="yearbook page about founder"
                  style={{ maxWidth: matchesMD ? "18.75em" : undefined }}
                />
              </Grid>
              <Grid item>
                <Typography variant="caption">
                  a page from my sophomore yearbook
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            lg
            style={{
              maxWidth: "45em",
              padding: "1.25em",
              display: matchesMD ? "none" : undefined,
            }}
          >
            <Typography variant="body1" paragraph align="center">
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Now I’m ready to apply everything I’ve learned, and to help others
              with the
            </Typography>
          </Grid>

          <Grid item>
            <Grid item container direction="column" lg alignItems={"flex-end"}>
              <Grid item>
                <img
                  src={PuppyImg}
                  alt="gray spotted puppy"
                  style={{ maxWidth: matchesMD ? "18.75em" : undefined }}
                />
              </Grid>
              <Grid item>
                <Typography variant="caption">
                  my miniature dapple dachshund, Sterling
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </Grid>
  );
};

export default AboutUs;
