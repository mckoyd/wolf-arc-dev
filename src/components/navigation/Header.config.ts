import { CSSProperties } from "react";
import { tss } from "tss-react/mui";
import { IMenuItem } from "../../interfaces";

export const useHeaderStyles = tss.create(({ theme }) => ({
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
  { name: "Custom Software Development", link: "/customsoftware" },
  { name: "Mobile App Development", link: "/mobileapps" },
  { name: "Website Development", link: "/websites" },
];
