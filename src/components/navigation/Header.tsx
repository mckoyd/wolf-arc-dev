import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import logo from "../../assets/images/logo.svg";
import { menuItems, useHeaderStyles } from "./Header.config";
import { Link } from "react-router-dom";
import { IMenuItem } from "../../interfaces";

const Header: React.FC = () => {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { classes, cx } = useHeaderStyles();
  const [headerTabValue, setHeaderTabValue] = useState<number>(0);
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(0);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleHeaderTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setHeaderTabValue(newValue);
  };

  const handleHeaderTabMenuMouseover = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(e.currentTarget);
    setIsOpen(true);
  };

  const handleHeaderMenuItemClick = (
    e: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedMenuItem(index);
    setAnchorElement(null);
    setIsOpen(false);
    setHeaderTabValue(1);
  };

  const handleHeaderTabMenuClose = () => {
    setAnchorElement(null);
    setIsOpen(false);
  };

  useEffect(() => {
    switch (window.location.hash.replace("#", "")) {
      case "/":
        setHeaderTabValue(0);
        break;
      case "/services":
      case "/customsoftware":
      case "/mobileapps":
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
  }, [window.location.hash]);

  const tabs: JSX.Element = (
    <>
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
          aria-owns={anchorElement ? "services-menu" : undefined}
          aria-haspopup={anchorElement ? "true" : undefined}
          onMouseOver={handleHeaderTabMenuMouseover}
          label="Services"
          className={classes.headerTab}
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
      <Menu
        id="services-menu"
        classes={{ paper: classes.menu }}
        anchorEl={anchorElement}
        open={isOpen}
        onClose={handleHeaderTabMenuClose}
        MenuListProps={{ onMouseLeave: handleHeaderTabMenuClose }}
        elevation={0}
      >
        {menuItems.map(({ name, link }: IMenuItem, index: number) => (
          <MenuItem
            onClick={(e) => handleHeaderMenuItemClick(e, index)}
            selected={index === selectedMenuItem && headerTabValue === 1}
            component={Link}
            classes={{ root: classes.menuItem }}
            to={link}
            key={`${name}-${index}`}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setHeaderTabValue(0);
            }}
            divider
            component={Link}
            to="/"
            selected={headerTabValue === 0}
          >
            <ListItemText
              className={
                headerTabValue === 0
                  ? cx(classes.drawerItem, classes.drawerItemSelected)
                  : classes.drawerItem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setHeaderTabValue(1);
            }}
            divider
            component={Link}
            to="/services"
            selected={headerTabValue === 1}
          >
            <ListItemText
              className={
                headerTabValue === 1
                  ? cx(classes.drawerItem, classes.drawerItemSelected)
                  : classes.drawerItem
              }
              disableTypography
            >
              Services
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setHeaderTabValue(2);
            }}
            divider
            component={Link}
            to="/revolution"
            selected={headerTabValue === 2}
          >
            <ListItemText
              className={
                headerTabValue === 2
                  ? cx(classes.drawerItem, classes.drawerItemSelected)
                  : classes.drawerItem
              }
              disableTypography
            >
              The Revolution
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setHeaderTabValue(3);
            }}
            divider
            component={Link}
            to="/about"
            selected={headerTabValue === 3}
          >
            <ListItemText
              className={
                headerTabValue === 3
                  ? cx(classes.drawerItem, classes.drawerItemSelected)
                  : classes.drawerItem
              }
              disableTypography
            >
              About Us
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setHeaderTabValue(4);
            }}
            divider
            component={Link}
            to="/contact"
            selected={headerTabValue === 4}
          >
            <ListItemText
              className={
                headerTabValue === 4
                  ? cx(classes.drawerItem, classes.drawerItemSelected)
                  : classes.drawerItem
              }
              disableTypography
            >
              Contact Us
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            divider
            component={Link}
            to="/estimate"
            className={classes.drawerItemEstimate}
          >
            <ListItemText
              className={cx(
                classes.drawerItem,
                headerTabValue === 0 && classes.drawerItemSelected
              )}
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar disableGutters>
        <Button
          component={Link}
          to="/"
          className={classes.logoBtn}
          disableRipple
          onClick={() => setHeaderTabValue(0)}
        >
          <img src={logo} alt="company logo" className={classes.logo} />
        </Button>
        {matches ? drawer : tabs}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
