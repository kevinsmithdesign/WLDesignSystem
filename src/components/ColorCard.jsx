import React from "react";
import { Typography, IconButton, Tooltip, Card, Box } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ColorCard = ({
  title,
  backgroundColor,
  hex,
  copyValue,
  copySuccess,
  handleCopy,
}) => {
  return (
    <Card
      sx={{
        p: 0,
        background: "#fff",
        boxShadow: "none",
        borderRadius: "10px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "220px",
          background: backgroundColor,
          borderRadius: "10px 10px 0px 0px",
          width: "100%",
          position: "relative",
        }}
      >
        <Tooltip title={copySuccess ? "Copied!" : "Copy to clipboard"} arrow>
          <IconButton
            onClick={() => handleCopy(copyValue)}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              zIndex: 1,
              color: "#fff",
            }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ py: 3, px: 3.5 }}>
        <Typography variant="h6" fontWeight="bold" mb={0.5}>
          {title}
        </Typography>
        <Typography variant="body2" pb={1}>
          {hex}
        </Typography>
      </Box>
    </Card>
  );
};

export default ColorCard;
