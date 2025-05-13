import React from "react";
import { Stack, Typography, Tabs, Tab, Box, Card, Alert } from "@mui/material";
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

const borderRadius = [
  { size: "2px", pm: "small" },
  { size: "4px", pm: "mediumSmall" },
  { size: "6px", pm: "medium" },
  { size: "8px", pm: "mediumLarge" },
  { size: "10px", pm: "large" },
  { size: "12px", pm: "extraLarge" },
  { size: "16px", pm: "xxl" },
  { size: "50%", pm: "circle" },
];

const BorderPage = () => {
  const theme = useTheme();

  const borderUsage = [
    {
      showComponent: (
        <>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.09)",
                height: "32px",
                width: "32px",
                borderRadius: "50%",
                position: "absolute",
                left: "-13px",
                top: "-13px",
                zIndex: 100,
              }}
            ></Box>
            <Box
              sx={{
                height: "48px",
                width: "48px",
                background: theme.palette.primary.main,
                borderRadius: "2px",
              }}
            ></Box>
          </Box>
        </>
      ),
      title: "2px",
      subTitle: "When to use",
      bullets: [
        "For subtle rounding on tight UI elements.",
        "Ideal for inputs, checkboxes, or tables with a sharp aesthetic.",
        "Maintains a clean and minimal look.",
      ],
    },
    {
      showComponent: (
        <>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.09)",
                // background: theme.palette.primary.light,
                height: "32px",
                width: "32px",
                borderRadius: "50%",
                position: "absolute",
                left: "-13px",
                top: "-13px",
                zIndex: 100,
              }}
            ></Box>
            <Box
              sx={{
                height: "48px",
                width: "48px",
                background: theme.palette.primary.main,
                borderRadius: "4px",
              }}
            ></Box>
          </Box>
        </>
      ),
      title: "4px",
      subTitle: "When to use",
      bullets: [
        "A standard small radius",
        "Great for form fields, buttons, or tag elements.",
        "Adds a bit of softness without losing structure.",
      ],
    },
    {
      showComponent: (
        <>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.09)",
                // background: theme.palette.primary.light,
                height: "32px",
                width: "32px",
                borderRadius: "50%",
                position: "absolute",
                left: "-13px",
                top: "-13px",
                zIndex: 100,
              }}
            ></Box>
            <Box
              sx={{
                height: "48px",
                width: "48px",
                background: theme.palette.primary.main,
                borderRadius: "6px",
              }}
            ></Box>
          </Box>
        </>
      ),
      title: "6px",
      subTitle: "When to use",
      bullets: [
        "Use for medium-rounded components.",
        "Works well with cards, input groups, or tooltips.",
        "Balanced between sharp and soft.",
      ],
    },
    {
      showComponent: (
        <>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.09)",
                // background: theme.palette.primary.light,
                height: "32px",
                width: "32px",
                borderRadius: "50%",
                position: "absolute",
                left: "-13px",
                top: "-13px",
                zIndex: 100,
              }}
            ></Box>
            <Box
              sx={{
                height: "48px",
                width: "48px",
                background: theme.palette.primary.main,
                borderRadius: "8px",
              }}
            ></Box>
          </Box>
        </>
      ),
      title: "8px",
      subTitle: "When to use",
      bullets: [
        "A versatile radius for most interactive components.",
        "Ideal for buttons, modals, and containers.",
        "Creates a modern, approachable feel.",
      ],
    },
    {
      showComponent: (
        <>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.09)",
                height: "32px",
                width: "32px",
                borderRadius: "50%",
                position: "absolute",
                left: "-13px",
                top: "-13px",
                zIndex: 100,
              }}
            ></Box>
            <Box
              sx={{
                height: "48px",
                width: "48px",
                background: theme.palette.primary.main,
                borderRadius: "10px",
              }}
            ></Box>
          </Box>
        </>
      ),
      title: "10px",
      subTitle: "When to use",
      bullets: [
        "For prominent rounding on large elements.",
        "Common in modern UI kits and mobile interfaces.",
        "Use when you want to emphasize friendly design.",
      ],
    },
    {
      showComponent: (
        <>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.09)",
                // background: theme.palette.primary.light,
                height: "32px",
                width: "32px",
                borderRadius: "50%",
                position: "absolute",
                left: "-13px",
                top: "-13px",
                zIndex: 100,
              }}
            ></Box>
            <Box
              sx={{
                height: "48px",
                width: "48px",
                background: theme.palette.primary.main,
                borderRadius: "12px",
              }}
            ></Box>
          </Box>
        </>
      ),
      title: "12px",
      subTitle: "When to use",
      bullets: [
        "Use for cards or content blocks that need extra softness.",
        "Often seen in onboarding, alerts, or stylized panels.",
        "Provides a warm, relaxed aesthetic.",
      ],
    },
    {
      showComponent: (
        <>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.09)",
                // background: theme.palette.primary.light,
                height: "32px",
                width: "32px",
                borderRadius: "50%",
                position: "absolute",
                left: "-13px",
                top: "-13px",
                zIndex: 100,
              }}
            ></Box>
            <Box
              sx={{
                height: "48px",
                width: "48px",
                background: theme.palette.primary.main,
                borderRadius: "16px",
              }}
            ></Box>
          </Box>
        </>
      ),
      title: "16px",
      subTitle: "When to use",
      bullets: [
        "For highly rounded UI blocks.",
        "Works well in marketing layouts or feature tiles.",
        "Best used when designing for visual comfort.",
      ],
    },
    {
      showComponent: (
        <>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.09)",
                // background: theme.palette.primary.light,
                height: "32px",
                width: "32px",
                borderRadius: "50%",
                position: "absolute",
                left: "-13px",
                top: "-13px",
                zIndex: 100,
              }}
            ></Box>
            <Box
              sx={{
                height: "48px",
                width: "48px",
                background: theme.palette.primary.main,
                borderRadius: "50%",
              }}
            ></Box>
          </Box>
        </>
      ),
      title: "50%",
      subTitle: "When to use",
      bullets: [
        "For perfectly round shapes like avatars, icons, or floating buttons.",
        "Automatically converts any square element into a circle.",
        "Great for emphasis and focal points.",
      ],
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ maxWidth: "1120px", mb: 8 }}>
      <Typography variant="h2" fontWeight="bold" mb={2}>
        Border Radius
      </Typography>
      <Typography variant="body1" mb={4}>
        Applied with intentional restraint, our radius values create visual
        softness from sharp edges to fully rounded elements. Each radius serves
        a specific purpose, from distinguishing interactive elements to creating
        visual groupings, balancing modern aesthetics with functional clarity.
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
        <Grid container spacing={2} pb={6}>
          {borderRadius.map(({ size, pm }) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={size}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card
                sx={{
                  background: "#fff",
                  boxShadow: "none",
                  borderRadius: "12px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: "150px",
                    // background: `${description}`,
                    background: theme.palette.primary.main,
                    borderRadius: "12px 12px 0px 0px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        background: "rgba(0, 0, 0, 0.09)",
                        height: "32px",
                        width: "32px",
                        borderRadius: "50%",
                        position: "absolute",
                        left: "-13px",
                        top: "-13px",
                        zIndex: 100,
                      }}
                    ></Box>
                    <Box
                      sx={{
                        height: "48px",
                        width: "48px",
                        background: theme.palette.primary.light,
                        // border: "1px solid #fff",
                        borderRadius: size,
                      }}
                    ></Box>
                  </Box>
                </Box>
                <Box sx={{ py: 2, px: 2.5 }}>
                  <Typography fontWeight="bold">{size}</Typography>
                  <Typography variant="body2" pb={1}>
                    {pm}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h3" fontWeight="bold" mb={{ xs: 1, sm: 2.5 }}>
          Guidelines & Rules
        </Typography>
        {borderUsage.map((buttonType, index) => (
          <UsageCard
            index={index}
            showComponent={buttonType.showComponent}
            title={buttonType.title}
            subTitle={buttonType.subTitle}
            bullets={buttonType.bullets}
          />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Alert severity="info">Coming Soon!</Alert>
      </CustomTabPanel>
    </Stack>
  );
};

export default BorderPage;
