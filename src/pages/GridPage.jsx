import React from "react";
import { Stack, Typography, Tabs, Tab, Box, Alert } from "@mui/material";
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

const GridPage = () => {
  const gridRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const tabletGrid = [1, 2, 3, 4, 5, 6, 7, 8];
  const mobileGrid = [1, 2, 3, 4];
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ maxWidth: "1120px", mb: 8 }}>
      <Typography variant="h2" fontWeight="bold" mb={3}>
        Grid
      </Typography>
      <Typography mb={6}>
        Grid system helps organize content by dividing the layout into columns
        and rows, making it easier to create consistent and responsive designs.
        It ensures elements are properly aligned, with even spacing between
        them, providing a clear structure that adapts to different screen sizes.
        Grids help maintain balance and visual hierarchy across your design.
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
        <Box sx={{ display: "flex", mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "2px",
              background: theme.palette.primary.main,
            }}
          ></Box>
          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                height: "2px",
                width: "100%",
                background: theme.palette.primary.main,
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              py: 1,
              px: 3,
              background: theme.palette.primary.main,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" color="white">
              Desktop
            </Typography>
          </Box>
          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                height: "2px",
                width: "100%",
                background: theme.palette.primary.main,
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "2px",
              background: theme.palette.primary.main,
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            // background: "#f3f7ff",
            background: "#e9f1ff",
            p: 2,
            mb: 3,
            height: "400px",
          }}
        >
          {gridRow.map((test, index) => (
            <Box
              key={test}
              sx={{
                display: "flex",
                flex: 1,
                // background: "#e9f1ff",
                background: "#f3f7ff",

                marginRight: index !== gridRow.length - 1 ? "16px" : "0", // Remove marginRight for last item
                alignItems: "center",
                justifyContent: "center",
                borderRight: `1px solid ${theme.palette.primary.main}`,
                borderLeft: `1px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="body2"
                sx={{ textAlign: "center", color: theme.palette.primary.main }}
              >
                {test} Col
              </Typography>
            </Box>
          ))}
        </Box>
        <Grid container spacing={6}>
          <Grid size={{ md: 8 }}>
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "2px",
                  background: theme.palette.primary.main,
                }}
              ></Box>
              <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    height: "2px",
                    width: "100%",
                    background: theme.palette.primary.main,
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 3,
                  background: theme.palette.primary.main,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" color="white">
                  Tablet
                </Typography>
              </Box>
              <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    height: "2px",
                    width: "100%",
                    background: theme.palette.primary.main,
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "2px",
                  background: theme.palette.primary.main,
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                // background: "#f3f7ff",
                background: "#e9f1ff",
                p: 2,
                mb: 2,
                height: "400px",
              }}
            >
              {tabletGrid.map((test, index) => (
                <Box
                  key={test}
                  sx={{
                    display: "flex",
                    flex: 1,
                    // background: "#e9f1ff",
                    background: "#f3f7ff",

                    marginRight: index !== tabletGrid.length - 1 ? "16px" : "0", // Remove marginRight for last item
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight: `1px solid ${theme.palette.primary.main}`,
                    borderLeft: `1px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {test} Col
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid size={{ md: 4 }}>
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "2px",
                  background: theme.palette.primary.main,
                }}
              ></Box>
              <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    height: "2px",
                    width: "100%",
                    background: theme.palette.primary.main,
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 3,
                  background: theme.palette.primary.main,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" color="white">
                  Mobile
                </Typography>
              </Box>
              <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    height: "2px",
                    width: "100%",
                    background: theme.palette.primary.main,
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "2px",
                  background: theme.palette.primary.main,
                }}
              ></Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                // background: "#f3f7ff",
                background: "#e9f1ff",
                p: 2,
                mb: 2,
                height: "400px",
              }}
            >
              {mobileGrid.map((test, index) => (
                <Box
                  key={test}
                  sx={{
                    display: "flex",
                    flex: 1,
                    // background: "#e9f1ff",
                    background: "#f3f7ff",

                    marginRight: index !== gridRow.length - 1 ? "16px" : "0", // Remove marginRight for last item
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight: `1px solid ${theme.palette.primary.main}`,
                    borderLeft: `1px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {test} Col
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Alert severity="info">Coming Soon!</Alert>
      </CustomTabPanel>
    </Stack>
  );
};

export default GridPage;
