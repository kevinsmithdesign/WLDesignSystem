import { createTheme } from "@mui/material";

const jsonConfig = {
  primaryText: "#313B5A",
  secondaryText: "#313C4C",
  disabledText: "#9CA3AF",
  primaryColor: "#3B75FE",
  primaryDarkColor: "#253A7B",
  primaryLightColor: "#5E75BF",
  secondaryColor: "#22b0fb",
  errorColor: "#fc4627",
  warningColor: "#fec132",
  infoColor: "#4230C6",
  successColor: "#39c874",
};

const theme = createTheme({
  palette: {
    text: {
      primary: jsonConfig.primaryText,
      secondary: jsonConfig.secondaryText,
      disabled: jsonConfig.disabledText,
    },
    primary: {
      main: jsonConfig.primaryColor,
    },
    secondary: {
      main: jsonConfig.secondaryColor,
    },
    error: {
      main: jsonConfig.errorColor,
    },
    warning: {
      main: jsonConfig.warningColor,
    },
    info: {
      main: jsonConfig.infoColor,
    },
    success: {
      main: jsonConfig.successColor,
    },
  },
  typography: {
    h1: {
      fontSize: "46px",
      fontWeight: "normal",
    },
    h2: {
      fontSize: "36px",
      fontWeight: "normal",
    },
    h3: {
      fontSize: "32px",
      fontWeight: "normal",
    },
    h4: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 16px",
          borderRadius: "8px",
          boxShadow: "none",
          fontWeight: "600",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          padding: "16px",
          // border: `1px solid ${theme.palette.primary.main}`,
        }),
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          marginBottom: "4px",
        },
      },
    },
  },
});

export default theme;
