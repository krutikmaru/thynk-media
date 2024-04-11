import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApplicationManagerProvider } from "./contexts/ApplicationContext";
import ApplicationRoutes from "./Routes/ApplicationRoutes";
import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApplicationManagerProvider>
        <ApplicationRoutes>
          <Layout>
            <App />
          </Layout>
        </ApplicationRoutes>
      </ApplicationManagerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
