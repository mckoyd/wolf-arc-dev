import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import logo from "../../assets/images/logo.svg";
import { useHeaderStyles } from "./Header.config";

const Header: React.FC = () => {
  const { classes } = useHeaderStyles();
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar disableGutters>
        <img src={logo} alt="company logo" className={classes.logo} />
        <Tabs className={classes.tabsContainer}>
          <Tab label="Home" className={classes.headerTab} />
          <Tab label="Services" className={classes.headerTab} />
          <Tab label="The Revolution" className={classes.headerTab} />
          <Tab label="About Us" className={classes.headerTab} />
          <Tab label="Contact Us" className={classes.headerTab} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
