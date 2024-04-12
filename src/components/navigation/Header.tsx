import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";

import logo from "../../assets/images/logo.svg";
import { useHeaderStyles } from "./Header.config";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { classes } = useHeaderStyles();
  const [headerTabValue, setHeaderTabValue] = useState<number>(0);

  const handleHeaderTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setHeaderTabValue(newValue);
  };

  useEffect(() => {
    switch (window.location.hash.replace("#", "")) {
      case "/":
        setHeaderTabValue(0);
        break;
      case "/services":
        setHeaderTabValue(1);
        break;
      case "/revolution":
        setHeaderTabValue(2);
        break;
      case "/about":
        setHeaderTabValue(3);
        break;
      case "/contact":
        setHeaderTabValue(4);
        break;
      default:
        setHeaderTabValue(0);
    }
  }, [headerTabValue]);

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar disableGutters>
        <Button
          component={Link}
          to="/"
          className={classes.logoBtn}
          disableRipple
        >
          <img src={logo} alt="company logo" className={classes.logo} />
        </Button>
        <Tabs
          value={headerTabValue}
          onChange={handleHeaderTabChange}
          className={classes.tabsContainer}
          indicatorColor="primary"
        >
          <Tab
            label="Home"
            className={classes.headerTab}
            component={Link}
            to="/"
          />
          <Tab
            label="Services"
            className={classes.headerTab}
            component={Link}
            to="/services"
          />
          <Tab
            label="The Revolution"
            className={classes.headerTab}
            component={Link}
            to="/revolution"
          />
          <Tab
            label="About Us"
            className={classes.headerTab}
            component={Link}
            to="/about"
          />
          <Tab
            label="Contact Us"
            className={classes.headerTab}
            component={Link}
            to="/contact"
          />
        </Tabs>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/estimate"
          className={classes.estimateBtn}
        >
          Free Estimate
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
