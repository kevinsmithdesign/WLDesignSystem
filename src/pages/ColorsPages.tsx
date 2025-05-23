import React, { useState } from "react";
import {
  Stack,
  Typography,
  Button,
  Select,
  MenuItem,
  Menu,
  Card,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ColorCard from "../components/ColorCard";
import Grid from "@mui/material/Grid2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ColorUsageCard from "../components/ColorUsageCard";

// Helper function to convert CSS color to hex if needed
const toHex = (color) => {
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = color;
  return ctx.fillStyle;
};

const ColorPage = () => {
  const theme = useTheme();
  const [copySuccess, setCopySuccess] = useState(false);
  const [colorFormat, setColorFormat] = useState("Token");

  const getColorValue = (color, token) => {
    if (colorFormat === "Token") return token;
    const temp = document.createElement("div");
    temp.style.color = color;
    document.body.appendChild(temp);
    const computedColor = getComputedStyle(temp).color;
    document.body.removeChild(temp);

    if (colorFormat === "RGB") return computedColor;

    const [r, g, b] = computedColor.match(/\d+/g);
    if (colorFormat === "HSL") {
      const rPerc = r / 255;
      const gPerc = g / 255;
      const bPerc = b / 255;
      const max = Math.max(rPerc, gPerc, bPerc);
      const min = Math.min(rPerc, gPerc, bPerc);
      let h,
        s,
        l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case rPerc:
            h = (gPerc - bPerc) / d + (gPerc < bPerc ? 6 : 0);
            break;
          case gPerc:
            h = (bPerc - rPerc) / d + 2;
            break;
          case bPerc:
            h = (rPerc - gPerc) / d + 4;
            break;
        }
        h /= 6;
      }

      return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
        l * 100
      )}%)`;
    }

    return toHex(color);
  };

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFormatChange = (format) => {
    setColorFormat(format);
    handleClose();
  };

  const sections = [
    {
      title: "Primary Colors",
      colors: [
        {
          title: "Primary Light",
          backgroundColor: theme.palette.primary.light,
          token: "theme.palette.primary.light",
        },
        {
          title: "Primary Main",
          backgroundColor: theme.palette.primary.main,
          token: "theme.palette.primary.main",
        },
        {
          title: "Primary Dark",
          backgroundColor: theme.palette.primary.dark,
          token: "theme.palette.primary.dark",
        },
      ],
    },
    {
      title: "Secondary Colors",
      colors: [
        {
          title: "Secondary Light",
          backgroundColor: theme.palette.secondary.light,
          token: "theme.palette.secondary.light",
        },
        {
          title: "Secondary Main",
          backgroundColor: theme.palette.secondary.main,
          token: "theme.palette.secondary.main",
        },
        {
          title: "Secondary Dark",
          backgroundColor: theme.palette.secondary.dark,
          token: "theme.palette.secondary.dark",
        },
      ],
    },
    {
      title: "Success Colors",
      colors: [
        {
          title: "Success Light",
          backgroundColor: theme.palette.success.light,
          token: "theme.palette.success.light",
        },
        {
          title: "Success Main",
          backgroundColor: theme.palette.success.main,
          token: "theme.palette.success.main",
        },
        {
          title: "Success Dark",
          backgroundColor: theme.palette.success.dark,
          token: "theme.palette.success.dark",
        },
      ],
    },
    {
      title: "Warning Colors",
      colors: [
        {
          title: "Warning Light",
          backgroundColor: theme.palette.warning.light,
          token: "theme.palette.warning.light",
        },
        {
          title: "Warning Main",
          backgroundColor: theme.palette.warning.main,
          token: "theme.palette.warning.main",
        },
        {
          title: "Warning Dark",
          backgroundColor: theme.palette.warning.dark,
          token: "theme.palette.warning.dark",
        },
      ],
    },
    {
      title: "Error Colors",
      colors: [
        {
          title: "Error Light",
          backgroundColor: theme.palette.error.light,
          token: "theme.palette.error.light",
        },
        {
          title: "Error Main",
          backgroundColor: theme.palette.error.main,
          token: "theme.palette.error.main",
        },
        {
          title: "Error Dark",
          backgroundColor: theme.palette.error.dark,
          token: "theme.palette.error.dark",
        },
      ],
    },
    {
      title: "Info Colors",
      colors: [
        {
          title: "Info Light",
          backgroundColor: theme.palette.info.light,
          token: "theme.palette.info.light",
        },
        {
          title: "Info Main",
          backgroundColor: theme.palette.info.main,
          token: "theme.palette.info.main",
        },
        {
          title: "Info Dark",
          backgroundColor: theme.palette.info.dark,
          token: "theme.palette.info.dark",
        },
      ],
    },
    {
      title: "Primary Text Colors",
      colors: [
        {
          title: "Primary Text",
          backgroundColor: theme.palette.text.primary,
          token: "theme.palette.text.primary",
        },
        {
          title: "Secondary Text",
          backgroundColor: theme.palette.text.secondary,
          token: "theme.palette.text.secondary",
        },
        {
          title: "Disabled Text",
          backgroundColor: theme.palette.text.disabled,
          token: "theme.palette.text.disabled",
        },
      ],
    },
  ];

  const colorUsage = [
    {
      title: "Primary",
      subTitle:
        "Interactive elements and primary actions. Creates visual hierarchy and drives user engagement.",
      usage: "Buttons, links, active states, focus indicators",
      backgroundColor: theme.palette.primary.main,
    },
    {
      title: "Secondary",
      subTitle:
        "Supporting color used for complementary actions and elements. Provides secondary emphasis without competing with Primary.",
      usage: "Secondary buttons, supporting elements",
      backgroundColor: theme.palette.secondary.main,
    },
    {
      title: "Text",
      subTitle:
        "High-contrast text for optimal legibility. Ensures content remains readable across all backgrounds.",
      usage: "Body text, headings, labels, primary content",
      backgroundColor: theme.palette.text.primary,
    },
    {
      title: "Success",
      subTitle:
        "Semantic color for positive states. Provides visual feedback for successful operations and task completions.",
      usage: "Success states, confirmations",
      backgroundColor: theme.palette.success.main,
    },
    {
      title: "Warning",
      subTitle:
        "Communicates caution and potential issues. Indicates actions that require user attention before proceeding.",
      usage: "Warning messages, caution states, important notifications",
      backgroundColor: theme.palette.warning.main,
    },
    {
      title: "Error",
      subTitle:
        "System feedback for errors and destructive actions. Alerts users to problems requiring immediate attention.",
      usage: "Error states, validation messages, destructive actions",
      backgroundColor: theme.palette.error.main,
    },
  ];

  const secondaryColorUsage = [
    {
      title: "Primary Light",
      subTitle:
        "Interactive elements in hover or inactive states. Provides a softer emphasis for primary UI elements and backgrounds.",
      usage: "Hover states, backgrounds, secondary primary elements",
      backgroundColor: theme.palette.primary.light,
    },
    {
      title: "Primary Dark",
      subTitle:
        "Interactive elements in pressed or active states. Provides stronger emphasis and visual feedback during interaction.",
      usage: "Pressed states, active indicators, strong focus rings",
      backgroundColor: theme.palette.primary.dark,
    },
    {
      title: "Secondary Light",
      subTitle:
        "Supporting elements that need subtle emphasis. Creates visual distinction without competing for attention with primary elements.",
      usage: "Hover states for secondary items, subtle highlights",
      backgroundColor: theme.palette.secondary.light,
    },
    {
      title: "Secondary Dark",
      subTitle:
        "Active or pressed states for secondary elements. Provides clear feedback for interacting with complementary components.",
      usage: "Active tabs, pressed secondary buttons, focus states",
      backgroundColor: theme.palette.secondary.dark,
    },
    {
      title: "Success Light",
      subTitle:
        "Subtle indication of successful states. Provides background emphasis for success messages without overwhelming the interface.",
      usage: "Success message backgrounds, success indicators",
      backgroundColor: theme.palette.success.light,
    },
    {
      title: "Success Dark",
      subTitle:
        "Strong indication of success for interactive elements. Provides emphasis for critical success messaging and active states.",
      usage: "Pressed success buttons, strong success indicators",
      backgroundColor: theme.palette.success.dark,
    },
    {
      title: "Warning Light",
      subTitle:
        "Subtle indication of cautionary states. Provides background emphasis for warning messages that require attention.",
      usage: "Warning message backgrounds, caution indicators",
      backgroundColor: theme.palette.warning.light,
    },
    {
      title: "Warning Dark",
      subTitle:
        "Strong indication of warning for interactive elements. Provides emphasis for critical warning messaging and active states.",
      usage: "Pressed warning buttons, strong warning indicators",
      backgroundColor: theme.palette.warning.dark,
    },
    {
      title: "Error Light",
      subTitle:
        "Subtle indication of error states. Provides background emphasis for error messages without overwhelming the interface.",
      usage: "Error message backgrounds, form field errors",
      backgroundColor: theme.palette.error.light,
    },
    {
      title: "Error Dark",
      subTitle:
        "Strong indication of error for interactive elements. Provides emphasis for critical error messaging and active states.",
      usage: "Pressed error buttons, strong error indicators",
      backgroundColor: theme.palette.error.dark,
    },
    {
      title: "Info Light",
      subTitle:
        "Subtle indication of informational states. Provides background emphasis for informational messages and notifications.",
      usage: "Info message backgrounds, tooltip backgrounds",
      backgroundColor: theme.palette.info.light,
    },
    {
      title: "Info Dark",
      subTitle:
        "Strong indication of information for interactive elements. Provides emphasis for important informational content.",
      usage: "Pressed info buttons, strong info indicators",
      backgroundColor: theme.palette.info.dark,
    },
  ];

  const designPrinciples = [
    {
      title: "Systematic",
      description:
        "Token-based architecture enables consistent application across platforms and automatic theming capabilities.",
    },
    {
      title: "Accessible",
      description:
        "Every color pairing meets WCAG 2.1 AA standards, with AAA compliance for critical text elements.",
    },
    {
      title: "Semantic",
      description:
        "Colors communicate meaning and status. They create predictable patterns that help users understand and navigate the interface.",
    },
  ];

  return (
    <Stack sx={{ maxWidth: "1120px", mb: 8 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h2" fontWeight="bold" mb={{ xs: 1, sm: 2 }}>
            Colors
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack flexDirection="row" justifyContent="flex-end">
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
                fontWeight: "bold",
                mb: { xs: 2, sm: 0 },
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              {colorFormat}
            </Button>
            <Menu
              id="theme-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "theme-menu-button",
              }}
            >
              {["Token", "HEX", "RGB", "HSL"].map((option) => (
                <MenuItem
                  key={option}
                  onClick={() => handleFormatChange(option)}
                  selected={option === colorFormat}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Grid>
      </Grid>

      <Typography variant="body1" mb={4}>
        Built on a foundation of design tokens, our color system scales from
        single products to multi-brand platforms. Each color serves a specific
        purpose, from semantic states to interactive feedback, creating
        predictable user experiences.
      </Typography>

      <Stack mb={6}>
        {sections.map(({ title, colors }, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            <Typography variant="h6" mb={0.5}>
              {title}
            </Typography>
            <Grid container spacing={2} mb={3}>
              {colors.map(({ title, backgroundColor, token }, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={index}>
                  <ColorCard
                    title={title}
                    backgroundColor={backgroundColor}
                    hex={getColorValue(backgroundColor, token)}
                    copyValue={getColorValue(backgroundColor, token)}
                    copySuccess={copySuccess}
                    setCopySuccess={setCopySuccess}
                    handleCopy={handleCopy}
                  />
                </Grid>
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </Stack>

      <Typography variant="h3" fontWeight="bold" mb={{ xs: 1, sm: 2.5 }}>
        {/* Color Usage */}
        Guidelines & Rules
      </Typography>
      <Typography variant="h6" mb={0.5}>
        Main Colors
      </Typography>
      <Grid container spacing={2} mb={6}>
        {colorUsage.map(({ title, subTitle, usage, backgroundColor }) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
            <ColorUsageCard
              title={title}
              subTitle={subTitle}
              usage={usage}
              backgroundColor={backgroundColor}
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" mb={0.5}>
        Other Colors
      </Typography>
      <Grid container spacing={2} mb={6}>
        {secondaryColorUsage.map(
          ({ title, subTitle, usage, backgroundColor }) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
              <ColorUsageCard
                title={title}
                subTitle={subTitle}
                usage={usage}
                backgroundColor={backgroundColor}
              />
            </Grid>
          )
        )}
      </Grid>
      <Typography variant="h3" fontWeight="bold" mb={{ xs: 1, sm: 2.5 }}>
        Color Design Principles
      </Typography>

      <Grid container spacing={2}>
        {designPrinciples.map(({ title, description }, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
            display="flex"
            alignItems="stretch"
          >
            <Card
              sx={{
                p: 3,
                background: "#fff",
                boxShadow: "none",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Typography variant="h5" fontWeight="bold" mb={1}>
                {title}
              </Typography>
              <Typography variant="body2" sx={{ flexGrow: 1 }}>
                {description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* <Card
        sx={{
          p: 3,
          background: "#fff",
          boxShadow: "none",
          borderRadius: "10px",
        }}
      >
        <Stack mb={2}>
          <Typography variant="h6" mb={0.5}>
            Systematic
          </Typography>
          <Typography variant="body1" mb={1}>
            Token-based architecture enables consistent application across
            platforms and automatic theming capabilities.
          </Typography>
        </Stack>
        <Stack mb={2}>
          <Typography variant="h6" mb={0.5}>
            Accessible
          </Typography>
          <Typography variant="body1" mb={1}>
            Every color pairing meets WCAG 2.1 AA standards, with AAA compliance
            for critical text elements.
          </Typography>
        </Stack>
        <Stack mb={2}>
          <Typography variant="h6" mb={0.5}>
            Semantic
          </Typography>
          <Typography variant="body1" mb={1}>
            Colors communicate meaning and state changes, creating predictable
            patterns users can learn.
          </Typography>
        </Stack>
      </Card> */}
    </Stack>
  );
};

export default ColorPage;
