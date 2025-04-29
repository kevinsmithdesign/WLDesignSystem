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

const UsageCard = ({ index, title, subTitle, bullets, showComponent }) => {
  return (
    <Card sx={{ p: 4, boxShadow: "none", borderRadius: 3, mb: 3 }}>
      <Stack flexDirection={{ xs: "column", lg: "row" }}>
        <Stack>
          <Box
            sx={{
              height: "260px",
              // width: "260px",

              width: { xs: "100%", lg: "260px" },
              background: "#f6f6f6",
              borderRadius: 3,
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
          <List sx={{ pl: 0, mt: 0 }}>
            {bullets.map((bullet, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "list-item",
                  listStyleType: "disc",
                  py: 0,
                  pl: 1,
                  ml: 2,
                }}
                disableGutters
              >
                <ListItemText
                  primary={bullet}
                  primaryTypographyProps={{
                    variant: "body1",
                    component: "span",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
    </Card>
  );
};

export default UsageCard;
