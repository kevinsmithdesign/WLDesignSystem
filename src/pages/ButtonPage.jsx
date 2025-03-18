import React from "react";
import { Stack, Typography, Tabs, Tab, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";
import Grid from "@mui/material/Grid2";
import UsageCard from "../components/UsageCard";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ButtonPage = () => {
  const buttonTypes = [
    {
      title: "Primary Button (Contained)",
      subTitle: "When to use",

      bullets: [
        'For the most important action on a page, like "Submit," "Save," or "Send."',
        "Use when you want to draw the user's attention to the main call to action.",
        "Often used in forms, dialog boxes, or places where the user is completing a primary task.",
      ],
    },
    {
      title: "Secondary Button (Outlined)",
      subTitle: "When to use",

      bullets: [
        "For alternative or secondary actions on a page.",
        "Use when you need to provide options that are important but not the primary focus.",
        'Often paired with a primary button to offer the user choices like "Cancel" or "Back."',
      ],
    },
    {
      title: "Text Button",
      subTitle: "When to use",

      bullets: [
        "For less prominent actions that don't require emphasis.",
        "Use for actions that need to be available but shouldn't compete with primary actions.",
        "Often used in dense UIs, lists, or card actions where space is limited.",
      ],
    },
    {
      title: "Text Button",
      subTitle: "When to use",

      bullets: [
        "For less prominent actions that don't require emphasis.",
        "Use for actions that need to be available but shouldn't compete with primary actions.",
        "Often used in dense UIs, lists, or card actions where space is limited.",
      ],
    },
  ];
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ maxWidth: "1120px", mb: 8 }}>
      <Typography variant="h2" fontWeight="bold" mb={3}>
        Button
      </Typography>
      <Typography mb={6}>
        Button system provides consistent styles and interactions for clickable
        elements across the interface. It defines different button types
        contained or outlined with clear visual states for hover, active,
        disabled, and focus. The system ensures buttons are accessible, visually
        distinct, and aligned with the brand's identity, offering flexibility in
        size, and shape. By standardizing button components, the design system
        enhances usability and provides a cohesive experience throughout the
        product.
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ mb: 3, borderBottom: "1px solid #ddd" }}
      >
        <Tab label="Design" {...a11yProps(0)} />
        <Tab label="Code" {...a11yProps(1)} />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <Box
          sx={{
            background: "#fff",
            p: 6,
            borderRadius: 3,
            position: "relative",
            mb: 4,
          }}
        >
          <Stack flexDirection="row" gap={3}>
            <Button variant="contained">Primary</Button>
            <Button variant="outlined">Secondary</Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
          </Stack>
        </Box>
        <>
          {buttonTypes.map((buttonType, index) => (
            <UsageCard
              key={index}
              title={buttonType.title}
              subTitle={buttonType.subTitle}
              bullets={buttonType.bullets}
            />
          ))}
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Code
      </CustomTabPanel>
    </Stack>
  );
};

export default ButtonPage;
