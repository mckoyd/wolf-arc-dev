import React, { useState } from "react";

import ElevationScroll from "../components/wrappers/ElevationScroll";
import Header from "../components/navigation/Header";
import { useAppStyles } from "./App.config";

import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/navigation/Footer";

const App: React.FC = () => {
  const { classes } = useAppStyles();
  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(0);
  const [headerTabValue, setHeaderTabValue] = useState<number>(0);

  return (
    <div className="app">
      <ElevationScroll>
        <Header
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
          headerTabValue={headerTabValue}
          setHeaderTabValue={setHeaderTabValue}
        />
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      <Routes>
        <Route path="/*" element={<div>Home</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/customsoftware" element={<div>Custom Software</div>} />
        <Route path="/mobileapps" element={<div>Mobile Apps</div>} />
        <Route path="/websites" element={<div>Websites</div>} />
        <Route path="/revolution" element={<div>The Revolution</div>} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
        <Route path="/estimate" element={<div>Estimate</div>} />
      </Routes>
      <Footer
        selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}
        headerTabValue={headerTabValue}
        setHeaderTabValue={setHeaderTabValue}
      />
    </div>
  );
};

export default App;
