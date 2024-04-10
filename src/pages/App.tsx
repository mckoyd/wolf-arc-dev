import React from "react";

import ElevationScroll from "../components/wrappers/ElevationScroll";
import Header from "../components/navigation/Header";
import { useAppStyles } from "./App.config";

import "../styles/App.css";

const App: React.FC = () => {
  const { classes } = useAppStyles();
  return (
    <div className="app">
      <ElevationScroll>
        <Header />
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </div>
  );
};

export default App;
