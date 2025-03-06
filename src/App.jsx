import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { Stack, Typography, Button, Divider } from "@mui/material";
import { useState } from "react";
import { ThemeProviderDesignSystem, useTheme } from "./themes/ThemeContext";
import DesignSystemOverviewPage from "./pages/DesignSystemOverviewPage";
import ColorPage from "./pages/ColorsPages";
import TypographyPage from "./pages/TypographyPage";
import SpacingPage from "./pages/SpacingPage";
import BorderPage from "./pages/BorderPage";
import ButtonPage from "./pages/ButtonPage";
import AlertPage from "./pages/AlertPage";
import GridPage from "./pages/GridPage";
import ChipPage from "./pages/ChipPage";
import TextFieldPage from "./pages/TextFieldPage";
import ControlsPage from "./pages/ControlsPage";
import DesignPrinciplesPage from "./pages/DesignPrinciplesPage";
import DesignSystemHamburgerBtn from "./components/DesignSystemHamburgerBtn";

const links = [
  { to: "/", title: "Overview" },
  { to: "/design-principles", title: "Design Principles" },
];

const moleculesLink = [
  { to: "/colors", title: "Colors" },
  { to: "/typography", title: "Typography" },
  { to: "/spacing", title: "Spacing" },
  { to: "/border", title: "Border" },
  { to: "/grid", title: "Grid" },
];

const componentsLink = [
  { to: "/button", title: "Button" },
  { to: "/chip", title: "Chip" },
  { to: "/text-field", title: "TextField" },
  { to: "/controls", title: "Controls" },
  { to: "/alert", title: "Alert" },
];

// This is now a separate component used inside the BrowserRouter context
const WhiteLabelContent = () => {
  const { themeName, setThemeName, theme } = useTheme();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const handleThemeChange = (theme) => {
    setThemeName(theme);
    setToggle(false);
  };

  return (
    <>
      <Stack sx={{ backgroundColor: theme.palette.primary.main }}>
        <Stack
          flexDirection="row"
          sx={{ maxWidth: "1430px", padding: "16px 24px" }}
        >
          <Stack sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                color: theme.palette.primary.contrastText,
              }}
            >
              {themeName}
            </Typography>
          </Stack>
          <Stack>
            <Button
              sx={{
                background: theme.palette.primary.contrastText,
                "&:hover": {
                  background: theme.palette.primary.contrastText,
                },
              }}
              onClick={toggleHamburgerMenu}
            >
              Change Theme
            </Button>
          </Stack>
          <Stack
            sx={{
              justifyContent: "center",
              ml: 2,
            }}
          ></Stack>
        </Stack>
      </Stack>
      <Stack
        flexDirection="row"
        sx={{
          maxWidth: "1410px",
          background: "red",
          position: "relative",
        }}
      >
        {toggle && (
          <Stack
            sx={{
              position: "absolute",
              top: 10,
              right: 55,
              zIndex: "1000",
              background: "#fff",
              padding: "16px",
              borderRadius: "8px",
              width: "160px",
            }}
          >
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme One")}
            >
              Theme One
            </Typography>
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme Two")}
            >
              Theme Two
            </Typography>
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme Three")}
            >
              Theme Three
            </Typography>
            <Typography
              sx={{ paddingBottom: "8px", cursor: "pointer" }}
              onClick={() => handleThemeChange("Theme Four")}
            >
              Theme Four
            </Typography>
          </Stack>
        )}
        {menuOpen && (
          <Stack>
            <Stack
              sx={{
                position: "absolute",
                top: 10,
                right: 0,
                zIndex: "1000",
                background: "#fff",
                padding: "16px",
                borderRadius: "8px",
                width: "200px",
                border: "1px solid #eee",
              }}
            >
              <Stack onClick={() => navigate("/")} sx={{ p: 1 }}>
                Portfolio
              </Stack>
              <Stack onClick={() => navigate("/resume")} sx={{ p: 1 }}>
                Resume
              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>

      <Stack flexDirection="column" sx={{ height: "100%", flex: 1 }}>
        <Stack
          flexDirection="row"
          sx={{ flex: 1, borderRight: "1px solid #eee" }}
        >
          <Stack sx={{ width: "260px", display: { xs: "none", md: "flex" } }}>
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
                  }}
                  to={to}
                >
                  <Typography>{title}</Typography>
                </Link>
              ))}
            </Stack>
          </Stack>
          <Stack
            sx={{
              flex: 1,
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
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

// Wrapper component that contains the router context
const WhiteLabelRouter = () => {
  return (
    <BrowserRouter>
      <WhiteLabelContent />
    </BrowserRouter>
  );
};

// Main app component that provides the theme context
const App = () => {
  return (
    <ThemeProviderDesignSystem>
      <WhiteLabelRouter />
    </ThemeProviderDesignSystem>
  );
};

export default App;
