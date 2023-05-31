import { Box, Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import { registerNewUser } from "../../services/auth";

export function Register() {
  const [username, setUsername] = useState<string>("");
  const [passwordState, setPasswordState] = useState<{ password: string, isValid: boolean, showHelperText: boolean }>(
    { password: "", isValid: true, showHelperText: false }
  );
  const [email, setEmail] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  async function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s])(?=.*\d)[A-Za-z\d^$.[\]{}()?"!@#%&/,><':;|_~`+=\\-]{8,}$/
    if (regexPassword.test(passwordState.password)) {
      setPasswordState({ ...passwordState, isValid: true })
      await registerNewUser({
        username,
        password: passwordState.password,
        email,
        name: firstname,
        surname: surname,
        gender,
        birthdate: "10/08/2000"
      });
    } else {
      setPasswordState({ ...passwordState, isValid: false })
    }
  }

  return (
    <Box
      component="form"
      onSubmit={(e) => register(e)}
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
        id="user-signup"
        label="Username"
        variant="outlined"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        sx={{ width: "300px", flexGrow: 1 }}
        id="password-signup"
        label="Password"
        type="password"
        variant="outlined"
        onChange={(e) => setPasswordState({ ...passwordState, password: e.target.value })}
        onFocus={() => setPasswordState({ ...passwordState, showHelperText: true })}
        error={!passwordState.isValid}
        helperText={
          passwordState.showHelperText &&
          <>
            - 8 characters length<br />
            - One upper case letter<br />
            - One number<br />
            - One symbol<br />
          </>
        }
      />
      <TextField
        sx={{ width: "300px" }}
        id="email-signup"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{ width: "300px" }}
        id="firstname-signup"
        label="First name"
        variant="outlined"
        onChange={(e) => setFirstname(e.target.value)}
      />
      <TextField
        sx={{ width: "300px" }}
        id="surname-signup"
        label="Surname"
        variant="outlined"
        onChange={(e) => setSurname(e.target.value)}
      />
      <RadioGroup
        row
        aria-labelledby="gender-buttons-group-label"
        defaultValue="female"
        name="gender-buttons"
        onChange={(e) => { setGender(e.target.value) }}
      >
        <FormControlLabel value="F" control={<Radio />} label="Female" />
        <FormControlLabel value="M" control={<Radio />} label="Male" />
        <FormControlLabel value="O" control={<Radio />} label="Other" />
      </RadioGroup>
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 4 }}
      >
        REGISTER
      </Button>
    </Box>
  )
}