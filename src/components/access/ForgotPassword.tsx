import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { sendForgotPasswordCode, submitNewPassword } from "../../services/auth";

export function ForgotPassword() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [forgotPasswordCode, setForgotPasswordCode] = useState<string>("");

  async function fogotPasswordSendCode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    await sendForgotPasswordCode(username);
  }

  async function forgotPasswordSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await submitNewPassword(username, password, forgotPasswordCode);
  }

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="form"
        onSubmit={(e) => forgotPasswordSubmit(e)}
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
          id="username"
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          sx={{ width: "300px", flexGrow: 1 }}
          id="new-password"
          label="New password"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          sx={{ width: "300px" }}
          id="forgot-password-code"
          label="Forgot password code"
          variant="outlined"
          onChange={(e) => setForgotPasswordCode(e.target.value)}
        />
        <Button sx={{ mt: 4 }} type="submit" variant="contained">UPDATE PASSWORD</Button>
        <Button variant="contained" color="success" onClick={(e) => fogotPasswordSendCode(e)}>SEND CODE</Button>
      </Box>
    </Box>
  )
}