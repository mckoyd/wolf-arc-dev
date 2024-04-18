import React from "react";

export interface IWrapper {
  children: React.ReactElement;
}

export interface IMenuItem extends IRoute {
  selectedIndex: number;
}

export interface IRoute {
  name: string;
  link: string;
  activeIndex: number;
}

export interface IHeaderFooter {
  selectedMenuItem: number;
  setSelectedMenuItem: (menuItemIndex: number) => void;
  headerTabValue: number;
  setHeaderTabValue: (headerTabValue: number) => void;
}

export interface IButtonArrow {
  btnArrowClass?: string;
  width: string;
  height: string;
  fill: string;
}
