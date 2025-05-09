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
        Alert system defines the design and behavior of feedback notifications
        that inform users about important states and actions within the app. It
        ensures a consistent appearance, hierarchy, and interaction across
        different alert types—such as information, success, warning, and error.
        The system prioritizes clarity by using distinct colors, icons, and
        concise messaging to communicate the nature and urgency of the alert.
        Standardizing the alert components helps improve the overall user
        experience, providing timely, accessible, and actionable feedback in
        various scenarios.
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Code
      </CustomTabPanel>
    </Stack>
  );
};

export default AlertPage;
