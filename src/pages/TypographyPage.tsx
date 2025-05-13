import React from "react";
import { Stack, Typography, Tabs, Tab, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeSnippet from "../components/CodeSnippet";
import Grid from "@mui/material/Grid2";
import UsageCard from "../components/UsageCard";

const typographyVariants = [
  {
    variant: "h1",
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: 1.3, // Unitless for implementation
    lineHeightDisplay: "130%", // Percentage for user display
    label: "Heading 1",
    responsive: { "@media (min-width:600px)": { fontSize: "48px" } },
  },
  {
    variant: "h2",
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: 1.3,
    lineHeightDisplay: "130%",
    label: "Heading 2",
    responsive: { "@media (min-width:600px)": { fontSize: "40px" } },
  },
  {
    variant: "h3",
    fontSize: "28px",
    fontWeight: 600,
    lineHeight: 1.3,
    lineHeightDisplay: "130%",
    label: "Heading 3",
    responsive: { "@media (min-width:600px)": { fontSize: "36px" } },
  },
  {
    variant: "h4",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: 1.3,
    lineHeightDisplay: "130%",
    label: "Heading 4",
    responsive: { "@media (min-width:600px)": { fontSize: "32px" } },
  },
  {
    variant: "h5",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: 1.4,
    lineHeightDisplay: "140%",
    label: "Heading 5",
  },
  {
    variant: "h6",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: 1.4,
    lineHeightDisplay: "140%",
    label: "Heading 6",
  },
  {
    variant: "body1",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.5,
    lineHeightDisplay: "150%",
    label: "Body 1",
  },
  {
    variant: "body2",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
    lineHeightDisplay: "150%",
    label: "Body 2",
  },
  {
    variant: "body3",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: 1.4,
    lineHeightDisplay: "140%",
    label: "Body 3",
  },
];

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

const TypographyPage = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const codeString = `
  <Typography variant="h1" gutterBottom>
    h1. Heading
  </Typography>
  <Typography variant="h2" gutterBottom>
    h2. Heading
  </Typography>
  <Typography variant="h3" gutterBottom>
    h3. Heading
  </Typography>
  <Typography variant="h4" gutterBottom>
    h4. Heading
  </Typography>
  <Typography variant="h5" gutterBottom>
    h5. Heading
  </Typography>
  <Typography variant="h6" gutterBottom>
    h6. Heading
  </Typography>
  `;

  const bodyCopyCode = `
    <Typography variant="body1" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2" gutterBottom>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
  `;

  const typographyUsage = [
    {
      showComponent: <Typography variant="h1">H1</Typography>,
      title: "H1 Heading",
      subTitle: "When to use",
      bullets: [
        "Use for the main page title or the most prominent heading.",
        "Typically appears once per page for semantic hierarchy and accessibility.",
        "Helps users quickly understand the main subject of the page.",
      ],
    },
    {
      showComponent: <Typography variant="h2">H2</Typography>,
      title: "H2 Heading",
      subTitle: "When to use",
      bullets: [
        "Use for section titles under the main H1 heading.",
        "Helps divide content into meaningful parts.",
        "Maintains a logical content structure.",
      ],
    },
    {
      showComponent: <Typography variant="h3">H3</Typography>,
      title: "H3 Heading",
      subTitle: "When to use",
      bullets: [
        "Use for sub-sections within an H2 section.",
        "Ideal for organizing detailed information under a category.",
        "Helps with visual scanning of nested content.",
      ],
    },
    {
      showComponent: <Typography variant="h4">H4</Typography>,
      title: "H4 Heading",
      subTitle: "When to use",
      bullets: [
        "Use when you need a heading within a card, modal, or widget.",
        "itable for supporting elements like form titles or small blocks of content.",
        "Less visually dominant than H1–H3.",
      ],
    },
    {
      showComponent: <Typography variant="h5">H5</Typography>,
      title: "H5 Heading",
      subTitle: "When to use",
      bullets: [
        "Use in compact areas like sidebars or tooltips.",
        "Great for labeling small modules or inline content.",
        "Maintains a lightweight hierarchy without being too bold.",
      ],
    },
    {
      showComponent: <Typography variant="h6">H6</Typography>,
      title: "H6 Heading",
      subTitle: "When to use",
      bullets: [
        "Use when you need the least visual emphasis in the heading group.",
        "Useful for fine print titles, legal disclaimers, or subtle content dividers.",
        "Avoid using for primary or even secondary information.",
      ],
    },
    {
      showComponent: <Typography variant="body1">body1</Typography>,
      title: "Body1 Text",
      subTitle: "When to use",
      bullets: [
        "Use for primary content like paragraphs, instructions, or descriptions.",
        "Ideal for areas where readability and consistency matter most.",
        "Should be your default body style.",
      ],
    },
    {
      showComponent: <Typography variant="body2">body2</Typography>,
      title: "Body2 Text",
      subTitle: "When to use",
      bullets: [
        "Use for supporting content such as captions, annotations, or metadata.",
        "Slightly smaller than Body1 to differentiate importance.",
        "Helps reduce visual noise while keeping context.",
      ],
    },
    {
      showComponent: <Typography variant="body3">body3</Typography>,
      title: "Body3 Text",
      subTitle: "When to use",
      bullets: [
        "Use for helper text, form hints, or legal disclaimers.",
        "Best when text needs to be visible but not distracting.",
        "Keep short to maintain legibility at smaller sizes.",
      ],
    },
  ];

  return (
    <Stack sx={{ maxWidth: "1120px", mb: 8 }}>
      <Typography variant="h2" fontWeight="bold" mb={2}>
        Typography
      </Typography>
      <Typography variant="body1" mb={6}>
        A systematic type scale establishes clear hierarchies and optimal
        reading experiences across devices. Each style serves a specific
        purpose, from heading emphasis to interface labeling, creating
        consistent rhythm and readability throughout the system.
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
        {/* <DesignSystemTitle
          atomicTitle="DESIGN TOKENS"
          sectionTitle="Typography"
          sectionDescription="Typography system establishes a clear hierarchy and readability throughout the product by defining font styles, sizes, weights, and spacing. It includes guidelines for headings, body text, captions, and other text elements, ensuring consistency in both desktop and mobile layouts. The system enhances the user experience by creating a visual rhythm, improving legibility, and supporting the overall tone and personality of the brand."
        /> */}
        <Box
          sx={{
            background: "#fff",
            p: 6,
            borderRadius: 3,
            position: "relative",
            mb: 4,
          }}
        >
          <Typography fontWeight="bold" variant="h4" mb={3}>
            Roboto
          </Typography>
          <Stack flexDirection="row" gap={4} mb={4}>
            <Typography fontWeight="100" variant="body1">
              Light
            </Typography>
            <Typography fontWeight="300" variant="body1">
              Regular
            </Typography>
            <Typography fontWeight="500" variant="body1">
              Medium
            </Typography>
            <Typography fontWeight="600" variant="body1">
              Semi
            </Typography>
            <Typography fontWeight="800" variant="body1">
              Bold
            </Typography>
          </Stack>

          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="body2">
                Built on systematic type scales, our typography creates clear
                hierarchies from single screens to complex applications. Each
                type style serves a specific purpose, from communicating content
                structure to enhancing readability, ensuring information is
                accessible to all users.
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 0, md: 5 }}
              // sx={{
              //   display: {
              //     xs: "none", // Hide on extra small screens
              //     sm: "none", // Hide on small screens
              //     md: "block", // Hide on medium screens
              //     lg: "block", // Show on large screens and above
              //   },
              // }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 60,
                  display: {
                    xs: "none", // Hide on extra small screens
                    sm: "none", // Hide on small screens
                    md: "block", // Hide on medium screens
                    lg: "block", // Show on large screens and above
                  },
                }}
              >
                <img
                  src="https://assets.codepen.io/2392702/Aa.svg"
                  alt=""
                  style={{ width: "300px", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            background: "#fff",
            p: 6,
            borderRadius: 3,
            position: "relative",
            mb: 4,
          }}
        >
          <Box sx={{ display: "flex", borderBottom: "1px solid #DFE4F3" }}>
            <Box
              sx={{
                flex: 1,
                // background: "red",
                p: 3,
              }}
            >
              <Typography fontWeight="bold">Styles</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                // background: "orange",
                p: 3,
              }}
            >
              <Typography fontWeight="bold">Weight</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                //  background: "blue",
                p: 3,
              }}
            >
              <Typography fontWeight="bold">Size</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                // background: "green",
                p: 3,
              }}
            >
              <Typography fontWeight="bold">Line Height</Typography>
            </Box>
          </Box>

          {typographyVariants.map(
            ({ variant, fontSize, fontWeight, lineHeightDisplay }) => (
              <Box
                sx={{
                  display: "flex",
                  borderBottom: "1px solid #DFE4F3",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    // background: "blue",
                    p: 3,
                  }}
                >
                  <Typography variant={variant}>{variant}</Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    // background: "orange",
                    p: 3,
                  }}
                >
                  <Typography>{fontWeight}</Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    // background: "blue",
                    p: 3,
                  }}
                >
                  <Typography>{fontSize}</Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    // background: "green",
                    p: 3,
                  }}
                >
                  <Typography>{lineHeightDisplay}</Typography>
                </Box>
              </Box>
            )
          )}
        </Box>
        <>
          <Typography variant="h3" fontWeight="bold" mb={{ xs: 1, sm: 2.5 }}>
            Typography Usage
          </Typography>
          {typographyUsage.map((buttonType, index) => (
            <UsageCard
              key={index}
              showComponent={buttonType.showComponent}
              title={buttonType.title}
              subTitle={buttonType.subTitle}
              bullets={buttonType.bullets}
            />
          ))}
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h5" mb={3}>
          Typography Header
        </Typography>
        <Stack mb={4}>
          <CodeSnippet language="javascript" code={codeString} />
        </Stack>
        <Typography variant="h5" mb={3}>
          Typography Body Copy
        </Typography>
        <Stack mb={4}>
          <CodeSnippet language="javascript" code={bodyCopyCode} />
        </Stack>
      </CustomTabPanel>
    </Stack>
  );
};

export default TypographyPage;
