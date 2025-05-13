// import React from "react";
// import {
//   Card,
//   Stack,
//   Box,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";

// const ColorUsageCard = ({ title, subTitle, usage, backgroundColor }) => {
//   return (
//     <Card sx={{ p: 2, boxShadow: "none", borderRadius: 3, mb: 3 }}>
//       <Stack flexDirection={{ xs: "column", lg: "row" }}>
//         <Stack>
//           <Box
//             sx={{
//               height: "220px",
//               width: "220px",

//               //   width: { xs: "100%", lg: "260px" },
//               background: backgroundColor,
//               borderRadius: 2,
//               //   borderTopRightRadius: 3,
//               //   borderBottomRightRadius: 3,
//               mr: 3,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           ></Box>
//         </Stack>
//         <Stack
//           sx={{
//             pl: 1,
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="h4" mb={0.5} mt={{ xs: 2, lg: 0 }}>
//             {title}
//           </Typography>
//           <Typography variant="body1" mb={4}>
//             {subTitle}
//           </Typography>
//           <Typography variant="h6" mb={0.5}>
//             COMMON USAGE
//           </Typography>
//           <Typography>{usage}</Typography>
//         </Stack>
//       </Stack>
//     </Card>
//   );
// };

// export default ColorUsageCard;

import React from "react";
import { Typography, IconButton, Tooltip, Card, Box } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ColorUsageCard = ({ title, subTitle, usage, backgroundColor }) => {
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
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "180px",
          background: backgroundColor,
          borderRadius: "10px 10px 0px 0px",
          width: "100%",
          position: "relative",
        }}
      >
        {/* <Tooltip title={copySuccess ? "Copied!" : "Copy to clipboard"} arrow>
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
        </Tooltip> */}
      </Box>
      <Box sx={{ py: 3, px: 3.5 }}>
        <Typography variant="h5" fontWeight="bold" mb={1}>
          {title}
        </Typography>
        <Typography variant="body2" pb={3}>
          {subTitle}
        </Typography>
        <Typography variant="body2" fontWeight="bold" mb={0.5}>
          Common Usage
        </Typography>
        <Typography variant="body2" pb={1}>
          {usage}
        </Typography>
      </Box>
    </Card>
  );
};

export default ColorUsageCard;
