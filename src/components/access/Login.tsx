import { Box, Divider, useMediaQuery, useTheme } from "@mui/material";
import { Register } from "./Register";
import { SignIn } from "./SignIn";

export function Login() {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <SignIn />
      <Divider
        flexItem
        sx={{ mx: 5, my: 4 }}
        orientation={
          useMediaQuery(theme.breakpoints.down("md")) ? "horizontal" : "vertical"
        }
      />
      <Register />
    </Box>
  )
}