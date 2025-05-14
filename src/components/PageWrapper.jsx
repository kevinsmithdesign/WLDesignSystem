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
import CardPage from "../pages/CardPage";

const PageWrapper = ({ isOpen, setIsOpen }) => {
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
        {/* Mobile Nav - Now with transition effect */}
        <Stack
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            top: 0,
            right: isOpen ? "0" : "-260px", // Toggle position based on isOpen
            zIndex: 100,
            transition: "right 0.3s ease", // Add smooth transition
            height: "100%",
            boxShadow: isOpen ? "0px 0px 10px rgba(0,0,0,0.2)" : "none", // Optional: add shadow when open
            backgroundColor: theme.palette.background.paper, // Ensure it has a background
          }}
        >
          <LeftNavTwo />
        </Stack>

        {/* Overlay to close nav when clicking outside - Only visible when nav is open */}
        {isOpen && (
          <Box
            onClick={() => setIsOpen(false)}
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 99,
              display: { xs: "block", md: "none" },
            }}
          />
        )}

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
          <Route path="/card" element={<CardPage />} />
          <Route path="/grid" element={<GridPage />} />
        </Routes>
      </PageContent>
    </Stack>
  );
};

export default PageWrapper;
