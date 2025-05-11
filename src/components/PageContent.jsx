import React from "react";
import { Stack, Typography, Box, useTheme } from "@mui/material";

const PageContent = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        // height: "100%",
        // height: "100vh",
        background: "#f6f6fa",
        padding: { xs: "32px 16px", sm: "32px 48px" },
        overflowY: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default PageContent;
