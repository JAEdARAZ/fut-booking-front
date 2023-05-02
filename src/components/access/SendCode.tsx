import { Box, Button, TextField } from "@mui/material";
import { sendForgotPasswordCode } from "../../services/auth";

interface SendCodeProps {
  email: string,
  moveStepperForward: () => void,
  setEmail: (email: string) => void
}

export function SendCode({ email, moveStepperForward, setEmail }: SendCodeProps) {
  async function fogotPasswordSendCode(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await sendForgotPasswordCode(email);
    moveStepperForward();
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        component="form"
        onSubmit={(e) => fogotPasswordSendCode(e)}
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
          id="email"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button sx={{ mt: 4 }} type="submit" variant="contained">SEND CODE</Button>
      </Box>
    </Box>
  )
}