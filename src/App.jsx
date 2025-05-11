import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import {
  Stack,
  Typography,
  Button,
  Select,
  MenuItem,
  Menu,
  FormControl,
  InputLabel,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { ThemeProviderDesignSystem, useTheme } from "./themes/ThemeContext";
import LeftNav from "./components/Leftnav";

// Available themes for the selector
const themeOptions = ["Blue Print", "Greenhouse", "Spectrum", "Eclipse"];

// This is now a separate component used inside the BrowserRouter context
const WhiteLabelContent = () => {
  const { themeName, setThemeName, theme } = useTheme();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme) => {
    setThemeName(theme);
    handleClose();
  };

  return (
    <>
      <Stack
        sx={{
          backgroundColor: theme.palette.primary.main,
          position: "fixed",
          zIndex: 200,
          width: "100%",
        }}
      >
        <Stack
          flexDirection="row"
          sx={{ maxWidth: "1430px", padding: "16px 24px" }}
        >
          <Stack sx={{ flex: 1 }}>
            <Typography
              sx={{
                // fontSize: "24px",
                fontSize: { xs: "18px", sm: "24px" },
                fontWeight: "bold",
                color: theme.palette.primary.contrastText,
              }}
            >
              THEME: {themeName}
            </Typography>
          </Stack>
          <Stack>
            <Button
              id="theme-menu-button"
              aria-controls={open ? "theme-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                background: theme.palette.primary.contrastText,
                color: theme.palette.primary.main,
                fontWeight: "bold",
                display: { xs: "none", sm: "flex" },
                "&:hover": {
                  background: theme.palette.primary.contrastText,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              Change Theme
            </Button>
            <Menu
              id="theme-menu"
              MenuListProps={{
                "aria-labelledby": "theme-menu-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 3,
                sx: {
                  borderRadius: "6px",
                  minWidth: "180px",
                  mt: "8px",
                },
              }}
            >
              {themeOptions.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === themeName}
                  onClick={() => handleThemeChange(option)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Stack>
          <Stack
            sx={{
              justifyContent: "center",
              ml: 2,
            }}
          ></Stack>
        </Stack>
      </Stack>
      <LeftNav />
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
