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
import { menuItems, routes, useHeaderStyles } from "./Header.config";
import { Link } from "react-router-dom";
import { IHeaderFooter, IMenuItem, IRoute } from "../../interfaces";

const Header: React.FC<IHeaderFooter> = ({
  selectedMenuItem,
  setSelectedMenuItem,
  headerTabValue,
  setHeaderTabValue,
}) => {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { classes, cx } = useHeaderStyles();

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    [...routes, ...menuItems].forEach(
      ({ name, link }: IRoute, index: number) => {
        const tabValue = index > 4 ? 1 : index;
        switch (window.location.hash.replace("#", "")) {
          case link:
            setHeaderTabValue(tabValue);
            break;
          default:
            break;
        }
      }
    );
  }, []);

  const tabs: JSX.Element = (
    <>
      <Tabs
        value={headerTabValue}
        onChange={handleHeaderTabChange}
        className={classes.tabsContainer}
        indicatorColor="primary"
      >
        {routes.map(({ name, link, activeIndex }: IRoute, index: number) =>
          link === "/services" ? (
            <Tab
              aria-owns={anchorElement ? "services-menu" : undefined}
              aria-haspopup={anchorElement ? "true" : undefined}
              onMouseOver={handleHeaderTabMenuMouseover}
              label={name}
              className={classes.headerTab}
              component={Link}
              to={link}
              key={`${name}-${activeIndex}-${index}`}
            />
          ) : (
            <Tab
              label={name}
              component={Link}
              to={link}
              className={classes.headerTab}
              key={`${name}-${activeIndex}-${index}`}
            />
          )
        )}
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
        keepMounted
        style={{ zIndex: 1302 }}
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
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {[
            ...routes,
            { name: "Free Estimate", link: "/estimate", activeIndex: 5 },
          ].map((route, index) => (
            <ListItemButton
              onClick={() => {
                setOpenDrawer(false);
                setHeaderTabValue(index);
              }}
              divider
              component={Link}
              to={route.link}
              selected={headerTabValue === route.activeIndex}
              key={`${route.name}-${index}`}
            >
              <ListItemText
                className={
                  headerTabValue === route.activeIndex
                    ? cx(classes.drawerItem, classes.drawerItemSelected)
                    : classes.drawerItem
                }
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItemButton>
          ))}
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
    <AppBar position="fixed" color="primary" className={classes.appBar}>
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
