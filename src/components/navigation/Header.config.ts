import { CSSProperties } from "react";
import { tss } from "tss-react/mui";
import { IMenuItem, IRoute } from "../../interfaces";

export const useHeaderStyles = tss.create(({ theme }) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    ...(theme.mixins.toolbar as CSSProperties),
    marginBottom: "3em",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  logoBtn: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  logo: {
    height: "7em",
    [theme.breakpoints.down("xs")]: {
      height: "4.5em",
    },
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
  },

  tabsContainer: {
    marginLeft: "auto",
  },

  headerTab: {
    ...(theme.typography.headerTab as CSSProperties),
    minWidth: 10,
    marginLeft: "25px",

    "&.Mui-selected": {
      color: "white",
      fontWeight: 900,
    },
  },

  estimateBtn: {
    ...(theme.typography.estimateBtn as CSSProperties),
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...(theme.typography.headerTab as CSSProperties),
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...(theme.typography.headerTab as CSSProperties),
    opacity: "0.7",
    color: "white",
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

export const menuItems: IMenuItem[] = [
  {
    name: "Custom Software Development",
    link: "/customsoftware",
    activeIndex: 1,
    selectedIndex: 0,
  },
  {
    name: "iOS/Android App Development",
    link: "/mobileapps",
    activeIndex: 1,
    selectedIndex: 1,
  },
  {
    name: "Website Development",
    link: "/websites",
    activeIndex: 1,
    selectedIndex: 2,
  },
];

export const routes: IRoute[] = [
  { name: "Home", link: "/", activeIndex: 0 },
  { name: "Services", link: "/services", activeIndex: 1 },
  { name: "The Revolution", link: "/revolution", activeIndex: 2 },
  { name: "About Us", link: "/about", activeIndex: 3 },
  { name: "Contact Us", link: "/contact", activeIndex: 4 },
];
