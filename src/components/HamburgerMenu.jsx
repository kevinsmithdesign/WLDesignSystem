import React, { useState } from "react";
import { Box } from "@mui/material";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      onClick={() => setIsOpen(!isOpen)}
      sx={{
        width: "20px",
        height: "16px",
        position: "relative",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "20px",
          height: "3px",
          background: "#fff",
          borderRadius: "2px",
          transition: "transform 0.25s ease",
          transform: isOpen
            ? "translateY(5px) rotate(45deg)"
            : "translateY(0) rotate(0)",
          transformOrigin: "center",
        }}
      />
      <Box
        sx={{
          width: "20px",
          height: "3px",
          background: "#fff",
          borderRadius: "2px",
          transition: "opacity 0.25s ease",
          opacity: isOpen ? 0 : 1,
        }}
      />
      <Box
        sx={{
          width: "20px",
          height: "3px",
          background: "#fff",
          borderRadius: "2px",
          transition: "transform 0.25s ease",
          transform: isOpen
            ? "translateY(-8px) rotate(-45deg)"
            : "translateY(0) rotate(0)",
          transformOrigin: "center",
        }}
      />
    </Box>
  );
};

export default HamburgerMenu;
