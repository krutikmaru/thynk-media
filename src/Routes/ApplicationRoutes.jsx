import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/Layout";
import App from "../App";
import Team from "../pages/Team/OurTeam";
import Services from "../pages/Services/Services";
import Results from "../pages/Results/Results";
import TermsAndConditions from "../pages/Terms&Conditions/TermsAndConditions";
import Careers from "../pages/Careers/Careers";
import JobOpening from "../pages/Careers/JobOpening";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurClients from "../pages/Clients/OurClients";

function RoutesWrapper() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<App key={"Landing"} />} />
          <Route path="/our-team" element={<Team key={"Team"} />} />
          <Route path="/our-clients" element={<OurClients key={"Clients"} />} />
          <Route path="/services" element={<Services key={"Services"} />} />
          <Route path="/about-us" element={<AboutUs key={"AboutUs"} />} />
          <Route path="/careers" element={<Careers key={"Careers"} />} />
          <Route
            path="/careers/:id"
            element={<JobOpening key={"JobOpening"} />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions key={"TermsAndConditions"} />}
          />

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
