import React from "react";
import {
  Card,
  Stack,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const UsageCard = ({ title, subTitle, bullets, showComponent }, index) => {
  return (
    <Card key={index} sx={{ p: 4, boxShadow: "none", borderRadius: 3, mb: 3 }}>
      <Stack flexDirection={{ xs: "column", lg: "row" }}>
        <Stack>
          <Box
            sx={{
              height: "260px",
              // width: "260px",

              width: { xs: "100%", lg: "260px" },
              background: "#fafafa",
              borderRadius: 2,
              mr: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {showComponent}
          </Box>
        </Stack>
        <Stack
          sx={{
            pl: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" mb={2} mt={{ xs: 2, lg: 0 }}>
            {title}
          </Typography>
          <Typography variant="h6" mb={1}>
            {subTitle}
          </Typography>
          <List sx={{ pl: { xs: 0, lg: 2 } }}>
            {bullets.map((bullet, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "block", // allows wrapping
                  pl: 0,
                  py: 0.5,
                }}
                disableGutters
              >
                <Typography
                  variant="body1"
                  component="li"
                  sx={{
                    listStyleType: "disc",
                    marginLeft: 2,
                    display: "list-item",
                  }}
                >
                  {bullet}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
    </Card>
  );
};

export default UsageCard;
