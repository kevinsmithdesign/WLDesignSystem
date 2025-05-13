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

const spacing = [
  { size: "4px", pm: "m={1} or p={1}" },
  { size: "8px", pm: "m={2} or p={2}" },
  { size: "16px", pm: "m={3} or p={3}" },
  { size: "24px", pm: "m={4} or p={4}" },
  { size: "32px", pm: "m={5} or p={5}" },
  { size: "40px", pm: "m={6} or p={6}" },
  { size: "48px", pm: "m={8} or p={8}" },
  { size: "64px", pm: "m={9} or p={9}" },
];

const SpacingPage = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const spacingUsage = [
    {
      showComponent: (
        <Box
          sx={{
            height: "4px",
            width: "4px",
            borderRadius: "1px",
            background: theme.palette.primary.main,
          }}
        />
      ),
      title: "4px",
      subTitle: "When to use",
      bullets: [
        "For the tightest spacing needs.",
        "Ideal for small gaps in compact layouts.",
        "Use for dense UIs, icon padding, or inline elements.",
      ],
    },
    {
      showComponent: (
        <Box
          sx={{
            height: "8px",
            width: "8px",
            borderRadius: "2px",
            background: theme.palette.primary.main,
          }}
        />
      ),
      title: "8px",
      subTitle: "When to use",
      bullets: [
        "For small padding or margins.",
        "Commonly used between form fields or buttons in tight groups.",
        "Works well for compact card layouts.",
      ],
    },
    {
      showComponent: (
        <Box
          sx={{
            height: "16px",
            width: "16px",
            borderRadius: "3px",
            background: theme.palette.primary.main,
          }}
        />
      ),
      title: "16px",
      subTitle: "When to use",
      bullets: [
        "A versatile default spacing value.",
        "Commonly used for separating content blocks.",
        "Ideal for button groups, card padding, or modal spacing.",
      ],
    },
    {
      showComponent: (
        <Box
          sx={{
            height: "24px",
            width: "24px",
            borderRadius: "4px",
            background: theme.palette.primary.main,
          }}
        />
      ),
      title: "24px",
      subTitle: "When to use",
      bullets: [
        "For medium vertical spacing between components.",
        "Use between sections in cards or lists.",
        "Helps create breathing room without overwhelming space.",
      ],
    },
    {
      showComponent: (
        <Box
          sx={{
            height: "32px",
            width: "32px",
            borderRadius: "6px",
            background: theme.palette.primary.main,
          }}
        />
      ),
      title: "32px",
      subTitle: "When to use",
      bullets: [
        "For distinct visual separation.",
        "Great for layout sections or between stacked components.",
        "Common in page-level spacing between modules.",
      ],
    },
    {
      showComponent: (
        <Box
          sx={{
            height: "40px",
            width: "40px",
            borderRadius: "6px",
            background: theme.palette.primary.main,
          }}
        />
      ),
      title: "40px",
      subTitle: "When to use",
      bullets: [
        "For generous padding around major components.",
        "Often used in dashboard layouts and section headers.",
        "Helps with spacious, open designs.",
      ],
    },
    {
      showComponent: (
        <Box
          sx={{
            height: "48px",
            width: "48px",
            borderRadius: "6px",
            background: theme.palette.primary.main,
          }}
        />
      ),
      title: "48px",
      subTitle: "When to use",
      bullets: [
        "For separating major content zones.",
        "Useful in responsive designs with generous whitespace.",
        "Helps create clear breaks between sections.",
      ],
    },
    {
      showComponent: (
        <Box
          sx={{
            height: "64px",
            width: "64px",
            borderRadius: "6px",
            background: theme.palette.primary.main,
          }}
        />
      ),
      title: "64px",
      subTitle: "When to use",
      bullets: [
        "For large layout spacing and page gutters.",
        "Ideal in full-page sections or hero areas.",
        "Supports a clean, modern layout with lots of air.",
      ],
    },
  ];

  return (
    <Stack sx={{ maxWidth: "1120px", mb: 8 }}>
      <Typography variant="h2" fontWeight="bold" mb={2}>
        Spacing
      </Typography>
      <Typography variant="body1" mb={6}>
        Grounded in mathematical ratios, our spacing system creates breathing
        room from individual components to full layouts. Each space serves a
        specific purpose, from grouping related elements to defining clear
        sections, making interfaces feel organized and intentional.
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
        <Grid container spacing={2} mb={4}>
          {spacing.map(({ size, pm }) => (
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
                  <Box
                    sx={{
                      height: size,
                      width: size,
                      background: theme.palette.primary.light,
                      borderRight: "1px solid #fff",
                      borderLeft: "1px solid #fff",
                    }}
                  ></Box>
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
        {spacingUsage.map((buttonType, index) => (
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

export default SpacingPage;
