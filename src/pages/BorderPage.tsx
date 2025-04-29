import React from "react";
import { Stack, Typography, Tabs, Tab, Box, Card, Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";
import Grid from "@mui/material/Grid2";

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
  // { size: "60px", pm: "round" },
  { size: "50%", pm: "circle" },
];

const BorderPage = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ maxWidth: "1120px", mb: 8 }}>
      <Typography variant="h2" fontWeight="bold" mb={3}>
        Border Radius
      </Typography>
      <Typography variant="body2" mb={4}>
        Border Radius system defines the curvature of UI elements, contributing
        to the product's overall style and tone. It enhances the visual appeal
        by softening edges and adding a polished look to components such as
        buttons, cards, and inputs. Consistent use of border radius helps
        achieve a cohesive and approachable design, providing a sense of
        continuity and harmony across all interactions.
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Alert severity="info">Coming Soon!</Alert>
      </CustomTabPanel>
    </Stack>
  );
};

export default BorderPage;
