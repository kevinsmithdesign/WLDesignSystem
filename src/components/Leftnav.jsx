import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";
import DesignSystemOverviewPage from "../pages/DesignSystemOverviewPage";
import ColorPage from "../pages/ColorsPages";
import TypographyPage from "../pages/TypographyPage";
import SpacingPage from "../pages/SpacingPage";
import BorderPage from "../pages/BorderPage";
import ButtonPage from "../pages/ButtonPage";
import AlertPage from "../pages/AlertPage";
import GridPage from "../pages/GridPage";
import ChipPage from "../pages/ChipPage";
import TextFieldPage from "../pages/TextFieldPage";
import ControlsPage from "../pages/ControlsPage";
import DesignPrinciplesPage from "../pages/DesignPrinciplesPage";

const LeftNav = () => {
  const links = [
    { to: "/", title: "Overview" },
    // { to: "/design-principles", title: "Design Principles" },
  ];

  const moleculesLink = [
    { to: "/colors", title: "Colors" },
    { to: "/typography", title: "Typography" },
    { to: "/spacing", title: "Spacing" },
    { to: "/border", title: "Border Radius" },
    { to: "/grid", title: "Grid" },
  ];

  const componentsLink = [
    { to: "/button", title: "Button" },
    // { to: "/chip", title: "Chip" },
    // { to: "/text-field", title: "TextField" },
    // { to: "/controls", title: "Controls" },
    // { to: "/alert", title: "Alert" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        position: "relative",
        paddingTop: "73px", // Account for header
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "calc(100vh - 73px)",
          position: "fixed",
          top: "73px",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {/* Left Nav */}
        <Box
          sx={{
            width: "260px",
            height: "100%",
            background: "#fff",
            borderRight: "1px solid #eee",
            overflowY: "auto",
            display: { xs: "none", md: "block" },
            flexShrink: 0,
          }}
        >
          <Stack mt={8}>
            <Stack sx={{ padding: "0 0 8px 24px" }}>
              <Typography fontWeight="bold">Getting Started</Typography>
            </Stack>

            {links.map(({ to, title }, index) => (
              <Link
                key={index}
                style={{
                  textDecoration: "none",
                  color: "#222",
                  borderBottom: "1px solid #eee",
                  padding: "16px 24px",
                  display: "block",
                }}
                to={to}
              >
                <Typography>{title}</Typography>
              </Link>
            ))}
          </Stack>
          <Stack mb={2}>
            <Stack sx={{ padding: "16px 0 8px 24px" }}>
              <Typography fontWeight="bold">Foundation</Typography>
            </Stack>
            {moleculesLink.map(({ to, title }, index) => (
              <Link
                key={index}
                style={{
                  textDecoration: "none",
                  color: "#222",
                  borderBottom: "1px solid #eee",
                  padding: "16px 24px",
                  display: "block",
                }}
                to={to}
              >
                <Typography>{title}</Typography>
              </Link>
            ))}
          </Stack>
          <Stack mb={2}>
            <Stack sx={{ padding: "16px 0 8px 24px" }}>
              <Typography fontWeight="bold">Components</Typography>
            </Stack>
            {componentsLink.map(({ to, title }, index) => (
              <Link
                key={index}
                style={{
                  textDecoration: "none",
                  color: "#222",
                  borderBottom: "1px solid #eee",
                  padding: "16px 24px",
                  display: "block",
                }}
                to={to}
              >
                <Typography>{title}</Typography>
              </Link>
            ))}
          </Stack>

          {/* Add dummy content to ensure scrollability */}
          <Box sx={{ height: "50px" }}></Box>
        </Box>

        {/* Content Area */}
        <Box
          sx={{
            flex: 1,
            height: "100%",
            background: "#f6f6fa",
            padding: "32px 48px",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<DesignSystemOverviewPage />} />
            <Route
              path="/design-principles"
              element={<DesignPrinciplesPage />}
            />
            <Route path="/colors" element={<ColorPage />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/spacing" element={<SpacingPage />} />
            <Route path="/border" element={<BorderPage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/chip" element={<ChipPage />} />
            <Route path="/text-field" element={<TextFieldPage />} />
            <Route path="/controls" element={<ControlsPage />} />
            <Route path="/alert" element={<AlertPage />} />
            <Route path="/grid" element={<GridPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftNav;
