import React from "react";
import {
  Stack,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  Card,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";
import Grid from "@mui/material/Grid2";
import UsageCard from "../components/UsageCard";

import BackIcon from "../icons/BackIcon";
import BookmarkIcon from "../icons/BookmarkIcon";
import CartIcon from "../icons/CartIcon";
import AddIcon from "../icons/AddIcon";
import ChatIcon from "../icons/ChatIcon";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import CloseIcon from "../icons/CloseIcon";
import EditIcon from "../icons/EditIcon";
import EmailIcon from "../icons/EmailIcon";
import ErrorIcon from "../icons/ErrorIcon";
import FilterIcon from "../icons/FilterIcon";
import HeartIcon from "../icons/HeartIcon";
import HomeIcon from "../icons/HomeIcon";
import NotificationIcon from "../icons/Notifications";
import ProfileIcon from "../icons/ProfileIcon";
import SearchIcon from "../icons/SearchIcon";
import SettingsIcon from "../icons/SettingsIcon";
import ShareIcon from "../icons/ShareIcon";
import SuccessIcon from "../icons/SuccessIcon";
import WarningIcon from "../icons/WarningIcon";
import InfoIcon from "../icons/InfoIcon";
import ImageIcon from "../icons/ImageIcon";

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

const IconPage = () => {
  const icons = [
    { title: "AddIcon", component: <AddIcon /> },
    { title: "BackIcon", component: <BackIcon /> },
    { title: "BookmarkIcon", component: <BookmarkIcon /> },
    { title: "CartIcon", component: <CartIcon /> },
    { title: "ChatIcon", component: <ChatIcon /> },
    { title: "CheckmarkIcon", component: <CheckMarkIcon /> },
    { title: "CloseIcon", component: <CloseIcon /> },
    { title: "EditIcon", component: <EditIcon /> },
    { title: "EmailIcon", component: <EmailIcon /> },
    { title: "ErrorIcon", component: <ErrorIcon /> },
    { title: "FilterIcon", component: <FilterIcon /> },
    { title: "HeartIcon", component: <HeartIcon /> },
    { title: "HomeIcon", component: <HomeIcon /> },
    { title: "ImageIcon", component: <ImageIcon /> },
    { title: "InfoIcon", component: <InfoIcon /> },
    { title: "NotificationIcon", component: <NotificationIcon /> },
    { title: "ProfileIcon", component: <ProfileIcon /> },
    { title: "SearchIcon", component: <SearchIcon /> },
    { title: "SettingsIcon", component: <SettingsIcon /> },
    { title: "ShareIcon", component: <ShareIcon /> },
    { title: "SuccessIcon", component: <SuccessIcon /> },
    { title: "WarningIcon", component: <WarningIcon /> },
  ];

  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ maxWidth: "1120px", mb: 8 }}>
      <Typography variant="h2" fontWeight="bold" mb={2}>
        Icon
      </Typography>
      <Typography mb={6}>
        Designed with consistent line weights, our icon system communicates
        actions and states across the interface. Each icon serves a specific
        purpose, from navigation controls to system feedback, creating a clear
        visual language that users understand at a glance.RetryClaude can make
        mistakes. Please double-check responses.
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
        <Grid container spacing={2}>
          {icons.map(({ title, component }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Card sx={{ p: 3, boxShadow: "none", borderRadius: "8px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                  {component}
                </Box>
                <Typography textAlign="center" color="#222">
                  {title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Alert severity="info">Coming Soon!</Alert>
      </CustomTabPanel>
    </Stack>
  );
};

export default IconPage;
