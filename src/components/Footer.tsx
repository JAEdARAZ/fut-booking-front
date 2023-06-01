import { Box, Typography } from "@mui/material";
export const FOOTER_HEIGHT = "100px";

export function Footer() {
  return (
    <Box
      mt="auto"
      display="flex"
      justifyContent="center"
      bgcolor="#23262A"
      height={FOOTER_HEIGHT}
      width="100%"
    >
      <Typography color="common.white">HEY THIS IS THE FOOTER</Typography>
    </Box>
  );
};