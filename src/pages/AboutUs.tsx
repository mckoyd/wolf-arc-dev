import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { useAboutUsStyles } from "./AboutUs";
import HistoryImg from "../assets/images/history.svg";
import FounderImg from "../assets/images/founder.jpg";
import YearbookImg from "../assets/images/yearbook.svg";
import PuppyImg from "../assets/images/puppy.svg";

const AboutUs: React.FC = () => {
  const { classes } = useAboutUsStyles();
  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
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
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We’re the new kid on the block.
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography variant="body1" paragraph>
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant="body1" paragraph>
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
              style={{ maxHeight: "22em" }}
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

        <Grid item container>
          <Grid item container direction="column" lg>
            <Grid item>
              <img src={YearbookImg} alt="yearbook page about founder" />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
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
          <Grid item container direction="column" lg alignItems={"flex-end"}>
            <Grid item>
              <img src={PuppyImg} alt="gray spotted puppy" />
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
  );
};

export default AboutUs;
