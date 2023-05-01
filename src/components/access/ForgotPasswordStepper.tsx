import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { Fragment, useState } from 'react';
import { ForgotPassword } from './ForgotPassword';
import { SendCode } from './SendCode';

const steps = ['Send code', 'New password'];

export default function ForgotPasswordStepper() {
  const [username, setUsername] = useState<string>("");
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box sx={{ width: '100%' }} mt={5}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 5 }}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {
        activeStep === 0 &&
        (<Fragment>
          <SendCode
            moveStepperForward={() => handleNext()}
            username={username}
            setUsername={setUsername}
          />
        </Fragment>)
      }
      {
        activeStep === 1 &&
        (<Fragment>
          <ForgotPassword username={username} />
        </Fragment>)
      }
    </Box>
  );
}