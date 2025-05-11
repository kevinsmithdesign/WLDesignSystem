import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Stack, Typography, Box, useTheme } from "@mui/material";

const LeftNavTwo = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const theme = useTheme();

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
    { to: "/icon", title: "Icon" },
    { to: "/button", title: "Button" },
    // { to: "/chip", title: "Chip" },
    { to: "/text-field", title: "TextField" },
    // { to: "/controls", title: "Controls" },
    { to: "/alert", title: "Alert" },
  ];

  // Function to check if link is active
  const isActive = (path) => {
    // For the home route, only match exact path
    if (path === "/" && currentPath !== "/") {
      return false;
    }
    return currentPath === path;
  };

  return (
    <Box
      sx={{
        width: "260px",
        height: "100%",
        background: "#fff",
        overflowY: "auto",
        overflowX: "hidden",
        flexShrink: 0,
        scrollbarWidth: "thin", // Firefox
        scrollbarColor: "#eee transparent",
        // Webkit browsers
        "&::-webkit-scrollbar": {
          width: "0",
          background: "transparent",
        },

        // Show scrollbar on hover
        "&:hover": {
          scrollbarWidth: "thin", // Firefox
          msOverflowStyle: "auto", // IE

          "&::-webkit-scrollbar": {
            width: "2px !important",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          "&&::-webkit-scrollbar": {
            // Double ampersand for higher specificity
            width: "1px",
          },
          // Or be even more specific
          "&.MuiBox-root::-webkit-scrollbar": {
            width: "1px",
          },
        },
      }}
    >
      {/* <Box
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
      > */}
      {/* Left Nav */}
      {/* <Box
        sx={{
          width: "260px",
          height: "100%",
          background: "#fff",
          overflowY: "auto",
          display: { xs: "none", md: "none", lg: "block" },
          flexShrink: 0,
        }}
      > */}
      <Stack mt={8} mb={6}>
        <Stack sx={{ padding: "0 0 8px 24px" }}>
          <Typography variant="h5" fontWeight="bold">
            Getting Started
          </Typography>
        </Stack>
        <Stack px={1}>
          {links.map(({ to, title }, index) => {
            const active = isActive(to);
            return (
              <Link
                key={index}
                style={{
                  textDecoration: "none",
                  color: active ? "#fff" : "#222",
                  background: active ? theme.palette.primary.main : "",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  display: "block",
                  backgroundColor: active ? "primary.main" : "transparent",
                }}
                to={to}
              >
                <Typography sx={{ color: active ? "#fff" : "inherit" }}>
                  {title}
                </Typography>
              </Link>
            );
          })}
        </Stack>
      </Stack>
      <Stack mb={6}>
        <Stack sx={{ padding: "16px 0 8px 24px" }}>
          <Typography variant="h5" fontWeight="bold">
            Foundation
          </Typography>
        </Stack>
        <Stack px={1}>
          {moleculesLink.map(({ to, title }, index) => {
            const active = isActive(to);
            return (
              <Link
                key={index}
                style={{
                  textDecoration: "none",
                  color: active ? "#fff" : "#222",
                  background: active ? theme.palette.primary.main : "",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  display: "block",
                  backgroundColor: active ? "primary.main" : "transparent",
                }}
                to={to}
              >
                <Typography sx={{ color: active ? "#fff" : "inherit" }}>
                  {title}
                </Typography>
              </Link>
            );
          })}
        </Stack>
      </Stack>
      <Stack mb={6}>
        <Stack sx={{ padding: "16px 0 8px 24px" }}>
          <Typography variant="h5" fontWeight="bold">
            Components
          </Typography>
        </Stack>
        <Stack px={1}>
          {componentsLink.map(({ to, title }, index) => {
            const active = isActive(to);
            return (
              <Link
                key={index}
                style={{
                  textDecoration: "none",
                  color: active ? "#fff" : "#222",
                  background: active ? theme.palette.primary.main : "",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  display: "block",
                  backgroundColor: active ? "primary.main" : "transparent",
                }}
                to={to}
              >
                <Typography sx={{ color: active ? "#fff" : "inherit" }}>
                  {title}
                </Typography>
              </Link>
            );
          })}
        </Stack>
      </Stack>

      {/* Add dummy content to ensure scrollability */}
      <Box sx={{ height: "50px" }}></Box>
      {/* </Box> */}
      {/* </Box> */}
    </Box>
  );
};

export default LeftNavTwo;
