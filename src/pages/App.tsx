import React, { useState } from "react";

import ElevationScroll from "../components/wrappers/ElevationScroll";
import Header from "../components/navigation/Header";
import { useAppStyles } from "./App.config";

import { Route, Routes } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import { Grid } from "@mui/material";
import LandingPage from "./LandingPage";
import ServicesPage from "./ServicesPage";
import CustomSoftwarePage from "./CustomSoftwarePage";
import MobileApps from "./MobileApps";
import WebsitesPage from "./WebsitesPage";
import RevolutionPage from "./RevolutionPage.tsx";
import AboutUs from "./AboutUs.tsx";
import ContactPage from "./ContactPage.tsx";

const App: React.FC = () => {
  const { classes } = useAppStyles();
  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(0);
  const [headerTabValue, setHeaderTabValue] = useState<number>(0);

  return (
    <Grid container direction="column" className={classes.app}>
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
        <Route path="/*" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/customsoftware" element={<CustomSoftwarePage />} />
        <Route path="/mobileapps" element={<MobileApps />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="/revolution" element={<RevolutionPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/estimate" element={<div>Estimate</div>} />
      </Routes>
      <Footer
        selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}
        headerTabValue={headerTabValue}
        setHeaderTabValue={setHeaderTabValue}
      />
    </Grid>
  );
};

export default App;
