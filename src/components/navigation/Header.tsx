import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";

import logo from "../../assets/images/logo.svg";
import { useHeaderStyles } from "./Header.config";

const Header: React.FC = () => {
  const { classes } = useHeaderStyles();
  const [headerTabValue, setHeaderTabValue] = useState<number>(1);

  const handleHeaderTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setHeaderTabValue(newValue);
  };
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar disableGutters>
        <img src={logo} alt="company logo" className={classes.logo} />
        <Tabs
          value={headerTabValue}
          onChange={handleHeaderTabChange}
          className={classes.tabsContainer}
          indicatorColor="primary"
        >
          <Tab label="Home" className={classes.headerTab} />
          <Tab label="Services" className={classes.headerTab} />
          <Tab label="The Revolution" className={classes.headerTab} />
          <Tab label="About Us" className={classes.headerTab} />
          <Tab label="Contact Us" className={classes.headerTab} />
        </Tabs>
        <Button
          variant="contained"
          color="secondary"
          className={classes.estimateBtn}
        >
          Free Estimate
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
