import { Box, Button, FormControlLabel, Radio, RadioGroup, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { registerNewUser } from "../../services/auth";
import { ErrorType } from "../../types/errors/ErrorType";
import { Alert } from "../Alert";

export function Register() {
  const [usernameState, setUsernameState] = useState<{ username: string, isValid: boolean }>(
    { username: "", isValid: true }
  );
  const [passwordState, setPasswordState] = useState<{ password: string, isValid: boolean, showHelperText: boolean }>(
    { password: "", isValid: true, showHelperText: false }
  );
  const [email, setEmail] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setShowAlert(false);
  };

  async function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUsernameState({ ...usernameState, isValid: true });
    setPasswordState({ ...passwordState, isValid: true });
    try {
      await registerNewUser({
        username: usernameState.username,
        password: passwordState.password,
        email,
        name: firstname,
        surname: surname,
        gender,
        birthdate: "10/08/2000"
      });
      console.log("created user");
    } catch (error: any) {
      const code = error?.code;
      console.log(code);
      switch (code) {
        case ErrorType.USERNAME_EXISTS.code:
          setUsernameState({ ...usernameState, isValid: false });
          setAlertMessage(ErrorType.USERNAME_EXISTS.message);
          setShowAlert(true);
          break;
        case ErrorType.INVALID_PASSWORD.code:
          setPasswordState({ ...passwordState, isValid: false })
          setAlertMessage(ErrorType.INVALID_PASSWORD.message);
          setShowAlert(true);
          break;
        default:
          setUsernameState({ ...usernameState, isValid: true });
          setAlertMessage(ErrorType.INPUT_ERROR.message);
          setShowAlert(true);
          break;
      }
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
        required
        onChange={(e) => setUsernameState({ ...usernameState, username: e.target.value })}
        error={!usernameState.isValid}
      />
      <TextField
        sx={{ width: "300px", flexGrow: 1 }}
        id="password-signup"
        label="Password"
        type="password"
        variant="outlined"
        required
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
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{ width: "300px" }}
        id="firstname-signup"
        label="First name"
        variant="outlined"
        required
        onChange={(e) => setFirstname(e.target.value)}
      />
      <TextField
        sx={{ width: "300px" }}
        id="surname-signup"
        label="Surname"
        variant="outlined"
        required
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
      <Snackbar
        open={showAlert}
        autoHideDuration={10000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ mb: "110px" }}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="error"
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}