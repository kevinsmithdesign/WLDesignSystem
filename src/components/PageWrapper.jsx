import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Stack, Typography, Box, useTheme } from "@mui/material";
import DesignSystemOverviewPage from "../pages/DesignSystemOverviewPage";
import ColorPage from "../pages/ColorsPages";
import TypographyPage from "../pages/TypographyPage";
import SpacingPage from "../pages/SpacingPage";
import BorderPage from "../pages/BorderPage";
import IconPage from "../pages/IconPage";
import ButtonPage from "../pages/ButtonPage";
import AlertPage from "../pages/AlertPage";
import GridPage from "../pages/GridPage";
import ChipPage from "../pages/ChipPage";
import TextFieldPage from "../pages/TextFieldPage";
import ControlsPage from "../pages/ControlsPage";
import DesignPrinciplesPage from "../pages/DesignPrinciplesPage";
import LeftNavTwo from "./LeftNavTwo";

import PageContent from "./PageContent";

const PageWrapper = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const theme = useTheme();

  return (
    <Stack
      flexDirection="row"
      sx={{
        display: "flex",
        width: "100%",
        height: "calc(100vh - 73px)",
        position: "fixed",
        top: { xs: "60px", sm: "73px" },
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {/* Left Nav */}

      <Stack sx={{ display: { xs: "none", md: "flex" } }}>
        <LeftNavTwo />
      </Stack>
      {/* Content Area */}
      <PageContent>
        <Stack
          sx={{
            display: {
              xs: "block",
              md: "none",
              position: "absolute",
              top: 0,
              right: "-260px",
              zIndex: 100,
            },
          }}
        >
          {/* Mobile  */}
          <LeftNavTwo />
        </Stack>

        <Routes>
          <Route path="/" element={<DesignSystemOverviewPage />} />
          <Route path="/design-principles" element={<DesignPrinciplesPage />} />
          <Route path="/colors" element={<ColorPage />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/spacing" element={<SpacingPage />} />
          <Route path="/border" element={<BorderPage />} />
          <Route path="/icon" element={<IconPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/chip" element={<ChipPage />} />
          <Route path="/text-field" element={<TextFieldPage />} />
          <Route path="/controls" element={<ControlsPage />} />
          <Route path="/alert" element={<AlertPage />} />
          <Route path="/grid" element={<GridPage />} />
        </Routes>
      </PageContent>
    </Stack>
  );
};

export default PageWrapper;
