import React from "react";
import { Stack, Typography, Tabs, Tab, Box, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";
import Grid from "@mui/material/Grid2";
import Input from "../components/Input";
import SearchIcon from "../icons/SearchIcon";
import SendIcon from "../icons/SendIcon";

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

const TextFieldPage = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ maxWidth: "1120px", mb: 8 }}>
      <Typography variant="h2" fontWeight="bold" mb={3}>
        TextField
      </Typography>
      <Typography mb={6}>
        Input system defines the design and behavior of fields where users
        provide information, such as text boxes. It ensures consistency in
        appearance, spacing, and interaction states (focused, filled, disabled,
        error) across all forms and input areas. The system prioritizes
        usability by offering clear labels, helpful error messages, and
        accessible touch targets. Standardizing text input components helps
        improve the overall user experience, making data entry intuitive and
        efficient.
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
          <Grid
            container
            spacing={3}
            direction={{ xs: "column", md: "row" }}
            sx={{ mb: 3 }}
          >
            <Grid size="grow">
              <Input label="With Label" placeholder="Enter text" fullWidth />
            </Grid>
            <Grid size="grow">
              <Input
                label="With Icon"
                placeholder="Search..."
                icon={<SearchIcon width="24px" height="24px" />}
                fullWidth
              />
            </Grid>
            <Grid size="grow" sx={{ display: "flex", alignItems: "flex-end" }}>
              <Input placeholder="No label" fullWidth />
            </Grid>
          </Grid>
          <Grid container spacing={3} direction={{ xs: "column", md: "row" }}>
            <Grid size="grow">
              <Grid
                size="grow"
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                <Input
                  label="Lable"
                  placeholder="Send Message..."
                  fullWidth
                  endIcon={<SendIcon width="24px" height="24px" />}
                />
              </Grid>
            </Grid>
            <Grid size="grow">
              <Input
                label="Email"
                placeholder="Enter your email"
                error
                helperText="This field is required"
              />
            </Grid>
            <Grid
              size="grow"
              sx={{ display: "flex", alignItems: "flex-end" }}
            ></Grid>
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Code
      </CustomTabPanel>
    </Stack>
  );
};

export default TextFieldPage;
