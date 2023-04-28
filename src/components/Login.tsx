import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { getAuthorizationHeader, loginCognito, signOut } from "../services/auth";

export function Login() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await loginCognito(user, password);
  }

  async function logOut(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    await signOut();
  }

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
    >
      <Box
        component="form"
        onSubmit={(e) => login(e)}
        display="flex"
        flexDirection="column"
        alignItems="center"
        rowGap={2}
        p={2}
        border="1px solid"
        borderRadius="2%"
        borderColor="lightgrey"
      >
        <TextField
          sx={{ width: "300px" }}
          id="filled-search"
          label="User"
          type="search"
          variant="outlined"
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          sx={{ width: "300px" }}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">LOGIN</Button>
        <Button type="submit" variant="contained" onClick={(e) => logOut(e)}>SIGN OUT</Button>
      </Box>
    </Box>
  )
}