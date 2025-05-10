import React, { useState } from "react";
import {
  Stack,
  Typography,
  Button,
  Select,
  MenuItem,
  Menu,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ColorCard from "../components/ColorCard";
import Grid from "@mui/material/Grid2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
          title: "Primary Main",
          backgroundColor: theme.palette.primary.main,
          token: "theme.palette.primary.main",
        },
        {
          title: "Primary Dark",
          backgroundColor: theme.palette.primary.dark,
          token: "theme.palette.primary.dark",
        },
        {
          title: "Primary Light",
          backgroundColor: theme.palette.primary.light,
          token: "theme.palette.primary.light",
        },
      ],
    },
    {
      title: "Secondary Colors",
      colors: [
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
        {
          title: "Secondary Light",
          backgroundColor: theme.palette.secondary.light,
          token: "theme.palette.secondary.light",
        },
      ],
    },
    {
      title: "Success Colors",
      colors: [
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
        {
          title: "Success Light",
          backgroundColor: theme.palette.success.light,
          token: "theme.palette.success.light",
        },
      ],
    },
    {
      title: "Warning Colors",
      colors: [
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
        {
          title: "Warning Light",
          backgroundColor: theme.palette.warning.light,
          token: "theme.palette.warning.light",
        },
      ],
    },
    {
      title: "Error Colors",
      colors: [
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
        {
          title: "Error Light",
          backgroundColor: theme.palette.error.light,
          token: "theme.palette.error.light",
        },
      ],
    },
    {
      title: "Info Colors",
      colors: [
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
        {
          title: "Info Light",
          backgroundColor: theme.palette.info.light,
          token: "theme.palette.info.light",
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

  return (
    <Stack sx={{ maxWidth: "1120px", mb: 8 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h2" fontWeight="bold" mb={3}>
            Colors
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
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

      <Typography variant="body2" mb={4}>
        Built on a foundation of design tokens, our color system scales from
        single products to multi-brand platforms. Each color serves a specific
        purpose, from semantic states to interactive feedback, creating
        predictable user experiences.
      </Typography>

      {sections.map(({ title, colors }, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          <Typography variant="h6" mb={0.5}>
            {title}
          </Typography>
          <Grid container spacing={2} mb={3}>
            {colors.map(({ title, backgroundColor, token }, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
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
  );
};

export default ColorPage;
