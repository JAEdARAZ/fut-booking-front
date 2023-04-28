import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
        display="flex"
        position="fixed"
        bottom={0}
        justifyContent="center"
        bgcolor="#23262A"
        height="100px"
        width="100%"
      >
        <Typography color="common.white">HEY THIS IS THE FOOTER</Typography>
      </Box>
  );
};