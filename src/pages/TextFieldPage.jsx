import React from "react";
import { Stack, Typography, Tabs, Tab, Box, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";
import UsageCard from "../components/UsageCard";
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
  const textFieldTypes = [
    {
      showComponent: <Input label="Label" />,
      title: "Input (With Label)",
      subTitle: "When to use",
      bullets: [
        "Use labels to clearly define the purpose of an input field, ensuring users know what information is expected.",
        "Labels are crucial for accessibility, as they help assistive technologies identify the input fields.",
        // "Best used in forms with multiple input fields, where clarity is important, and when inputs might not be immediately obvious based on their placeholder alone.",
        "Ideal for longer forms or when users might need additional guidance on what information to provide.",
      ],
    },
    {
      showComponent: <Input />,
      title: "Input (Without Label)",
      subTitle: "When to use",
      bullets: [
        'Only use no label inputs in situations where the context of the input field is explicitly clear (e.g., search bars or inline inputs with accompanying action buttons like "Send").',
        "Avoid using no label inputs in forms that require multiple fields, as this can create confusion for users and reduce accessibility.",
        "No label inputs can be appropriate for minimal UIs where space is constrained or where additional UI elements provide clear guidance.",
      ],
    },
    {
      showComponent: (
        <Box sx={{ width: "180px" }}>
          <Input
            placeholder="Search..."
            icon={<SearchIcon width="24px" height="24px" />}
          />
        </Box>
      ),
      title: "Input (With Icons)",
      subTitle: "When to use",
      bullets: [
        "Use icons when an action is associated with the input field, such as search or adding a password visibility toggle.",
        "Can be used to improve clarity for fields like email (envelope icon) or search (magnifying glass icon).",
      ],
    },
    {
      showComponent: (
        <Input
          label="Username"
          placeholder="Enter a username"
          success
          helperText="Strong password"
        />
      ),
      title: "Input (Success State)",
      subTitle: "When to use",
      bullets: [
        "Display the success state when a user correctly fills in data, especially for real-time validation.",
        "Use sparingly to avoid overwhelming the user—reserve this for critical fields such as passwords.",
      ],
    },
    {
      showComponent: (
        <Input
          label="Password"
          placeholder="Enter a username"
          error
          helperText="Password should match"
        />
      ),
      title: "Input (Error State)",
      subTitle: "When to use",
      bullets: [
        "Use the error state when input validation fails (e.g., incorrect email format, required field left empty).",
        "Always accompany error states with clear error messages to guide users on how to resolve the issue.",
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
        TextField
      </Typography>
      <Typography mb={6}>
        Engineered for effortless input, our text field system handles
        everything from simple searches to complex form data. Each field variant
        serves a specific purpose, from collecting user information to providing
        real-time validation, making data entry feel smooth and error-free.
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
                label="Icon Start"
                placeholder="Search..."
                icon={<SearchIcon width="24px" height="24px" />}
                fullWidth
              />
            </Grid>
            <Grid size="grow" sx={{ display: "flex", alignItems: "flex-end" }}>
              <Input
                label="Icon End"
                placeholder="Send Message..."
                fullWidth
                endIcon={<SendIcon width="24px" height="24px" />}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} direction={{ xs: "column", md: "row" }}>
            <Grid
              size="grow"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid size="grow" sx={{ mt: { xs: 2, md: 0 } }}>
                <Input placeholder="No label" fullWidth />
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
            <Grid size="grow">
              <Input
                label="Username"
                placeholder="Enter a username"
                success
                helperText="Strong password"
              />
            </Grid>
          </Grid>
        </Box>
        <>
          {textFieldTypes.map((textField, index) => (
            <UsageCard
              key={index}
              showComponent={textField.showComponent}
              title={textField.title}
              subTitle={textField.subTitle}
              bullets={textField.bullets}
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

export default TextFieldPage;
