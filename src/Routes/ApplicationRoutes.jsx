import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/Layout";
import App from "../App";
import Team from "../pages/Team/OurTeam";
import Services from "../pages/Services/Services";
import Results from "../pages/Results/Results";

function RoutesWrapper() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<App key={"Landing"} />} />
          <Route path="/our-team" element={<Team key={"Team"} />} />
          <Route path="/services" element={<Services key={"Services"} />} />

          {/* Routes not using Layout */}
          <Route path="/results" element={<Results key={"Results"} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function ApplicationRoutes() {
  return (
    <Layout>
      <RoutesWrapper />
    </Layout>
  );
}

export default ApplicationRoutes;
