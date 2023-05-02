import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { submitNewPassword } from "../../services/auth";
import { useNavigate } from "react-router-dom";

interface ForgotPasswordProps {
  email: string
}

export function ForgotPassword({email}: ForgotPasswordProps) {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [forgotPasswordCode, setForgotPasswordCode] = useState<string>("");

  async function forgotPasswordSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await submitNewPassword(email, password, forgotPasswordCode);
    navigate("/login");
  }

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
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
          disabled
          id="email"
          label="Email"
          variant="outlined"
          defaultValue={email}
        />
        <TextField
          sx={{ width: "300px" }}
          id="forgot-password-code"
          label="Code"
          variant="outlined"
          onChange={(e) => setForgotPasswordCode(e.target.value)}
        />
        <TextField
          sx={{ width: "300px", flexGrow: 1 }}
          id="new-password"
          label="New password"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button sx={{ mt: 4 }} type="submit" variant="contained">UPDATE PASSWORD</Button>
      </Box>
    </Box>
  )
}