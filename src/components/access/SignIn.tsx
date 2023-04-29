import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { loginCognito } from "../../services/auth";

export function SignIn() {
  const [userLogin, setUserLogin] = useState<string>("");
  const [passwordLogin, setPasswordLogin] = useState<string>("");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await loginCognito(userLogin, passwordLogin);
  }

  return (
    <Box
      component="form"
      onSubmit={(e) => login(e)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ alignSelf: { xs: "inherit", md: "flex-start" } }}
      rowGap={2}
      p={2}
      border="1px solid"
      borderRadius="2%"
      borderColor="lightgrey"
    >
      <TextField
        sx={{ width: "300px" }}
        id="user-login"
        label="User"
        variant="outlined"
        onChange={(e) => setUserLogin(e.target.value)}
      />
      <TextField
        sx={{ width: "300px", flexGrow: 1 }}
        id="password-login"
        label="Password"
        type="password"
        variant="outlined"
        onChange={(e) => setPasswordLogin(e.target.value)}
      />
      <Button sx={{ mt: 4 }} type="submit" variant="contained">LOGIN</Button>
    </Box>
  )
}