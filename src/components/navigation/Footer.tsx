import React from "react";
import { useFooterStyles } from "./Footer.config";
import FooterAdornment from "../../assets/images/Footer Adornment.svg";
import FacebookIcon from "../../assets/images/facebook.svg";
import TwitterIcon from "../../assets/images/twitter.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { IHeaderFooter } from "../../interfaces";

const Footer: React.FC<IHeaderFooter> = ({
  selectedMenuItem,
  setSelectedMenuItem,
  headerTabValue,
  setHeaderTabValue,
}) => {
  const { classes } = useFooterStyles();
  return (
    <footer className={classes.footer}>
      <Grid
        container
        justifyContent="center"
        className={classes.mainContainer}
        spacing={2}
      >
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              onClick={() => setHeaderTabValue(0)}
              component={Link}
              to="/"
              className={classes.link}
            >
              Home
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              onClick={() => setHeaderTabValue(1)}
              component={Link}
              to="/services"
              className={classes.link}
            >
              Services
            </Grid>
            <Grid
              item
              onClick={() => {
                setHeaderTabValue(1);
                setSelectedMenuItem(0);
              }}
              component={Link}
              to="/customsoftware"
              className={classes.link}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              onClick={() => {
                setHeaderTabValue(1);
                setSelectedMenuItem(1);
              }}
              component={Link}
              to="/mobileapps"
              className={classes.link}
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              onClick={() => {
                setHeaderTabValue(1);
                setSelectedMenuItem(2);
              }}
              component={Link}
              to="/websites"
              className={classes.link}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              onClick={() => setHeaderTabValue(2)}
              component={Link}
              to="/revolution"
              className={classes.link}
            >
              The Revolution
            </Grid>
            <Grid
              item
              onClick={() => setHeaderTabValue(2)}
              component={Link}
              to="/revolution"
              className={classes.link}
            >
              Vision
            </Grid>
            <Grid
              item
              onClick={() => setHeaderTabValue(2)}
              component={Link}
              to="/revolution"
              className={classes.link}
            >
              Technology
            </Grid>
            <Grid
              item
              onClick={() => setHeaderTabValue(2)}
              component={Link}
              to="/revolution"
              className={classes.link}
            >
              Process
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              onClick={() => setHeaderTabValue(3)}
              component={Link}
              to="/about"
              className={classes.link}
            >
              About Us
            </Grid>
            <Grid
              item
              onClick={() => setHeaderTabValue(3)}
              component={Link}
              to="/about"
              className={classes.link}
            >
              History
            </Grid>
            <Grid
              item
              onClick={() => setHeaderTabValue(3)}
              component={Link}
              to="/about"
              className={classes.link}
            >
              Team
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              onClick={() => setHeaderTabValue(4)}
              component={Link}
              to="/contact"
              className={classes.link}
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        className={classes.adornment}
        src={FooterAdornment}
        alt="black decorative slash"
      />

      <Grid
        container
        justifyContent="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="facebook logo"
            src={FacebookIcon}
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="twitter logo" src={TwitterIcon} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="instagram logo"
            src={InstagramIcon}
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
