import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-charts/themeAugmentation";
import type {} from "@mui/x-data-grid-pro/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";
import type {} from "@mui/material/themeCssVarsAugmentation";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./shared-theme/AppTheme";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "./dashboard/theme/customizations";

import Dashboard from "./pages/Dashboard";
import Generator from "./pages/Generator";
import Home from "./pages/Home";

import Layout from "./components/Layout";
const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Generator />} />
            <Route path="/reports" element={<Generator />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
