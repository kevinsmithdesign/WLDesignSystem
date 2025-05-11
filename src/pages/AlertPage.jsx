import React from "react";
import {
  Stack,
  Typography,
  Tabs,
  Tab,
  Box,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";
import Grid from "@mui/material/Grid2";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import WarningIcon from "../icons/WarningIcon";
import SuccessIcon from "../icons/SuccessIcon";
import InfoIcon from "../icons/InfoIcon";
import ErrorIcon from "../icons/ErrorIcon";

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

const AlertPage = () => {
  const buttonTypes = [
    {
      // showComponent: <Button variant="contained">Primary</Button>,
      showComponent: "",
      title: "Success Alert",
      subTitle: "When to use",
      bullets: [
        "Use success alerts to confirm that a user action was successful.",
        "This type of alert is often seen after form submissions, API calls, or task completions (e.g., “Profile updated successfully” or “Your message has been sent”).",
        "Success alerts can be dismissible if the message is purely informational and doesn’t require further action.",
      ],
    },
    {
      // showComponent: <Button variant="outlined">Secondary</Button>,
      showComponent: "",
      title: "Info Alert",
      subTitle: "When to use",

      bullets: [
        "Use an information alert to provide neutral or helpful information that users may need to be aware of but doesn't require immediate action.",
        "Best for displaying messages that inform users about system status, updates, or general information (e.g., “New version available”, “Your session will expire in 10 minutes”, or “This feature is currently in beta”).",
        "Information alerts are typically lower priority and should not be disruptive to the user experience.",
      ],
    },
    {
      // showComponent: (
      //   <Button variant="contained" disabled>
      //     Disabled
      //   </Button>
      // ),
      showComponent: "",
      title: "Warning Alert",
      subTitle: "When to use",
      bullets: [
        "Use warning alerts to inform users about something that requires attention but is not critical.",
        "Ideal for highlighting potential issues that need review or caution (e.g., “Your subscription is about to expire” or “This action cannot be undone”).",
        "Warning alerts are a good middle-ground between information and error, allowing users to act before it turns into an issue.",
      ],
    },
    {
      // showComponent: (
      //   <Button variant="contained" color="error">
      //     Delete
      //   </Button>
      // ),
      showComponent: "",
      title: "Error Alert",
      subTitle: "When to use",
      bullets: [
        "Use error alerts when something has gone wrong or requires immediate action.",
        "Commonly used for form validation errors (e.g., “Invalid email address”) or system failures (e.g., “Failed to connect to server”).",
        "Error alerts should be prominent, with strong visual cues like red coloring and an icon, to draw attention to the issue.",
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
        Alert
      </Typography>
      <Typography mb={6}>
        Crafted for clear communication, our alert system delivers messages from
        subtle notifications to critical warnings. Each alert type serves a
        specific purpose, from confirming successful actions to preventing
        errors, ensuring users stay informed without feeling overwhelmed.RetryKS
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
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              severity="success"
              icon={
                <SuccessIcon
                  width="24px"
                  height="24px"
                  stroke={theme.palette.success.dark}
                />
              }
            >
              <AlertTitle>Success</AlertTitle>
              This is a success Alert with an encouraging title.
            </Alert>
            <Alert
              severity="info"
              icon={
                <InfoIcon
                  width="24px"
                  height="24px"
                  stroke={theme.palette.info.dark}
                />
              }
            >
              <AlertTitle>Info</AlertTitle>
              This is an info Alert with an informative title.
            </Alert>
            <Alert
              severity="warning"
              icon={
                <WarningIcon
                  width="24px"
                  height="24px"
                  stroke={theme.palette.warning.dark}
                />
              }
            >
              <AlertTitle>Warning</AlertTitle>
              This is a warning Alert with a cautious title.
            </Alert>
            <Alert
              severity="error"
              icon={
                <ErrorIcon
                  width="24px"
                  height="24px"
                  stroke={theme.palette.error.dark}
                />
              }
            >
              <AlertTitle>Error</AlertTitle>
              This is an error Alert with a scary title.
            </Alert>
          </Stack>
        </Box>
        <>
          {buttonTypes.map((buttonType, index) => (
            <UsageCard
              key={index}
              // showComponent={buttonType.showComponent}
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

export default AlertPage;
