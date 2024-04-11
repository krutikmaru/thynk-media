import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/Layout";
import App from "../App";

function RoutesWrapper() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<App key={"Landing"} />} />
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
