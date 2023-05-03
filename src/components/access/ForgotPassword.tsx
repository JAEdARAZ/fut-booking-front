import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Popover, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { submitNewPassword } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { VisibilityOff, Visibility, Info } from "@mui/icons-material";

interface ForgotPasswordProps {
  email: string
}

export function ForgotPassword({ email }: ForgotPasswordProps) {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [forgotPasswordCode, setForgotPasswordCode] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  async function forgotPasswordSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await submitNewPassword(email, password, forgotPasswordCode);
    navigate("/login");
  }


  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const openPopover = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


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
        <Box width="100%">
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                  <IconButton
                    sx={{ml: 1}}
                    aria-label="password information"
                    onClick={openPopover}
                    edge="end"
                  >
                    <Info />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Box p={2}>
              <Typography>- Minimum 8 characters</Typography>
              <Typography>- At least one uppercase letter</Typography>
              <Typography>- At least one lowercase letter</Typography>
              <Typography>- At least one symbol</Typography>
              <Typography>- At least one number</Typography>
            </Box>
          </Popover>
        </Box>
        <Button sx={{ mt: 4 }} type="submit" variant="contained">UPDATE PASSWORD</Button>
      </Box>
    </Box>
  )
}