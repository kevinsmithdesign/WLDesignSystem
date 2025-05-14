import React from "react";
import {
  Stack,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  Alert,
  Card,
} from "@mui/material";
import { useTheme, lighten } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";
import Grid from "@mui/material/Grid2";
import UsageCard from "../components/UsageCard";
import SettingsIcon from "../icons/SettingsIcon";
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

const CardPage = () => {
  const buttonTypes = [
    {
      showComponent: <Button variant="contained">Primary</Button>,
      title: "Primary Button (Contained)",
      subTitle: "When to use",
      bullets: [
        'For the most important action on a page, like "Submit," "Save," or "Send."',
        "Use when you want to draw the user's attention to the main call to action.",
        "Often used in forms, dialog boxes, or places where the user is completing a primary task.",
      ],
    },
    {
      showComponent: <Button variant="outlined">Secondary</Button>,
      title: "Secondary Button (Outlined)",
      subTitle: "When to use",

      bullets: [
        "For alternative or secondary actions on a page.",
        "Use when you need to provide options that are important but not the primary focus.",
        'Often paired with a primary button to offer the user choices like "Cancel" or "Back."',
      ],
    },
    {
      showComponent: (
        <Button variant="contained" disabled>
          Disabled
        </Button>
      ),
      title: "Disabled Button",
      subTitle: "When to use",
      bullets: [
        "Use in situations where a user needs to complete an action (e.g., fill out a form) before the button becomes clickable.",
        "Disabled buttons should communicate that an action is unavailable until a condition is met.",
        'Dynamic Behavior: Once the user completes the task, the button becomes enabled. When performing an action like an API call, the button displays the text "Loading..." and is disabled again to prevent multiple submissions.',
      ],
    },
    {
      showComponent: (
        <Button variant="contained" color="error">
          Delete
        </Button>
      ),
      title: "Delete Button",
      subTitle: "When to use",
      bullets: [
        "For less prominent actions that don't require emphasis.",
        "Use for actions that need to be available but shouldn't compete with primary actions.",
        "Often used in dense UIs, lists, or card actions where space is limited.",
      ],
    },
    {
      showComponent: (
        <Button variant="contained" color="success">
          Success
        </Button>
      ),
      title: "Success Button",
      subTitle: "When to use",
      bullets: [
        "Use to indicate a successful or positive action, like “Confirm,” “Done,” or “Success.”",
        "Ideal for reassuring the user that their task or input has been accepted or completed.",
        "Helps reinforce user confidence after actions like saving, confirming, or submitting data.",
      ],
    },
    {
      showComponent: <Button variant="text">Text</Button>,
      title: "Text Button",
      subTitle: "When to use",
      bullets: [
        "Use for the least prominent actions, such as “Skip,” “Learn more,” or “Dismiss.”",
        "Ideal for space-saving layouts where buttons need to feel lightweight and non-intrusive.",
        "Best used when the action is optional or secondary to the primary task on the screen.",
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
      <Typography variant="h2" fontWeight="bold" mb={2}>
        Card
      </Typography>
      <Typography mb={6}>
        Structured for clarity and hierarchy, our card system presents content
        in easily scannable, modular blocks. Each card variant is built to
        surface key information, support actions, and adapt to various content
        types—helping users navigate, explore, and engage without friction.
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
          <Box
            sx={{
              //   height: "260px",
              // width: "260px",
              py: 6,
              width: "100%",
              background: "#f6f6fa",
              borderRadius: 2,
              mr: 3,
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "60%",
                p: 4,
                borderRadius: "8px",
                boxShadow: "none",
              }}
            >
              <Typography variant="h4" mb={0.5}>
                Basic Card
              </Typography>
              <Typography variant="body2" mb={2}>
                Simple card with title and content
              </Typography>
              <Typography variant="body1">
                This is a basic card component with minimal styling, perfect for
                simple content display.
              </Typography>
            </Card>
          </Box>

          <Box
            sx={{
              //   height: "260px",
              // width: "260px",
              py: 6,

              width: "100%",
              background: "#f6f6fa",
              borderRadius: 2,
              mr: 3,
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "60%",
                p: 4,
                borderRadius: "8px",
                boxShadow: "none",
              }}
            >
              <Typography variant="h4" mb={1}>
                Action Card
              </Typography>
              <Typography variant="body1" mb={3}>
                This is an action card which contains buttons for user
                interaction.
              </Typography>
              <Stack flexDirection="row" gap={2}>
                <Button variant="contained">Primary</Button>
                <Button variant="outlined">Secondary</Button>
              </Stack>
            </Card>
          </Box>

          <Box
            sx={{
              py: 6,
              width: "100%",
              background: "#f6f6fa",
              borderRadius: 2,
              mr: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Card
              sx={{
                width: "60%",
                p: 4,
                borderRadius: "8px",
                boxShadow: "none",
                cursor: "pointer",
                "&:hover": {
                  background: lighten(theme.palette.primary.main, 0.9),
                },
              }}
            >
              <Typography variant="h4" mb={1}>
                Interactive Card
              </Typography>
              <Typography variant="body1" mb={3}>
                This is an interactive card. The entire card is clickable with a
                hover effect.
              </Typography>
              <Stack flexDirection="row" gap={2}>
                <Typography sx={{ color: theme.palette.primary.main }}>
                  Link
                </Typography>
              </Stack>
            </Card>
          </Box>

          <Box
            sx={{
              py: 6,
              width: "100%",
              background: "#f6f6fa",
              borderRadius: 2,
              mr: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Card
              sx={{
                width: "60%",
                p: 4,
                borderRadius: "8px",
                boxShadow: "none",
                borderLeft: `8px solid ${theme.palette.primary.main}`,
              }}
            >
              <Stack flexDirection="row" alignItems="center" gap={2} mb={2}>
                <Stack>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: theme.palette.primary.main,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ImageIcon width="24px" height="24px" stroke="#fff" />
                  </Box>
                </Stack>
                <Stack>
                  <Typography variant="h4" mb={0.5}>
                    Featured Card
                  </Typography>
                  <Typography variant="body2">
                    With icon and colored border
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="body1">
                Highlight important features with this visually disctinct card
                design
              </Typography>
            </Card>
          </Box>
        </Box>
        <>
          {/* {buttonTypes.map((buttonType, index) => (
            <UsageCard
              key={index}
              showComponent={buttonType.showComponent}
              title={buttonType.title}
              subTitle={buttonType.subTitle}
              bullets={buttonType.bullets}
            />
          ))} */}
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Alert severity="info">Coming Soon!</Alert>
      </CustomTabPanel>
    </Stack>
  );
};

export default CardPage;
