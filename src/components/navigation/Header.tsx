import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import logo from "../../assets/images/logo.svg";
import { useHeaderStyles } from "./Header.config";

const Header: React.FC = () => {
  const { classes } = useHeaderStyles();
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar disableGutters>
        <img src={logo} alt="company logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
