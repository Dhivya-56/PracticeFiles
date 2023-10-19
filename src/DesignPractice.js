import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Step,
  Stepper,
  StepButton,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
const steps = ["Shipping address", "Payment details", "Review your order"];
const DesignPractice = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  console.log(activeStep, steps.length);
  const handleNext = () => {
    if (activeStep <= steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  console.log(activeStep);
  return (
    <Box sx={{ width: 1180, height: "auto", border: "1px solid black" }}>
      <AppBar />
      <Toolbar sx={{ backgroundColor: "#e4e5eb" }}>
        <Typography variant="h5" fontFamily="Bahnschrift">
          {" "}
          Zybisys
        </Typography>
      </Toolbar>
      <Box
        sx={{
          border: "0px solid grey",
          width: 600,
          height: 840,
          margin: "auto",
          marginTop: 4,
          borderRadius: 3,
          boxShadow: "2",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 100 }}
          textAlign="center"
          fontFamily="Gadugi"
        >
          Checkout
        </Typography>
        <Stepper
          nonLinear
          activeStep={activeStep}
          sx={{ margin: 0.7, marginTop: 3 }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 && (
          <Box sx={{ height: 400, width: 500, margin: "auto", marginTop: 3 }}>
            <Typography variant="h5">Shipping address</Typography>
            <Box
              component="div"
              sx={{ display: "flex", gap: 12, marginTop: 3 }}
            >
              <TextField
                id="standard-basic"
                label="First Name*"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Last Name*"
                variant="standard"
              />
            </Box>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: 3,
              }}
            >
              <TextField
                id="standard-basic"
                label="Address line1*"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Address line2"
                variant="standard"
              />
            </Box>
            <Box
              component="div"
              sx={{ display: "flex", gap: 12, marginTop: 3 }}
            >
              <TextField id="standard-basic" label="City*" variant="standard" />
              <TextField
                id="standard-basic"
                label="State/Province/Region"
                variant="standard"
              />
            </Box>
            <Box
              component="div"
              sx={{ display: "flex", gap: 12, marginTop: 3 }}
            >
              <TextField
                id="standard-basic"
                label="Zip/Postal code*"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Country*"
                variant="standard"
              />
            </Box>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Use this address for payment details"
              sx={{ marginTop: 3 }}
            />
          </Box>
        )}
        {activeStep === 1 && (
          <Box sx={{ height: 400, width: 400, margin: "auto", marginTop: 3 }}>
            <Typography variant="h5">Payment method</Typography>
            <Box component="div" sx={{ display: "flex", gap: 2, marginTop: 3 }}>
              <TextField
                id="standard-basic"
                label="Name on Card*"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Card number*"
                variant="standard"
              />
            </Box>

            <Box component="div" sx={{ display: "flex", gap: 2, marginTop: 3 }}>
              <TextField
                id="standard-basic"
                label="Expiry date*"
                variant="standard"
              />
              <TextField id="standard-basic" label="CVV" variant="standard" />
            </Box>

            <FormControlLabel
              required
              control={<Checkbox />}
              label="Remember credit card details for next time
"
              sx={{ marginTop: 3 }}
            />
          </Box>
        )}
        {activeStep === steps.length - 1 && (
          <Box sx={{ height: 400, width: 500, margin: "auto", marginTop: 3 }}>
            <Typography variant="h6" fontWeight="700" sx={{ marginBottom: 3 }}>
              Order summary{" "}
            </Typography>
            <Box component="div" sx={{ display: "flex", marginTop: 3 }}>
              <Box
                component="div"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="h6">Product 1</Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  A nice thing
                </Typography>
              </Box>
              <Typography
                sx={{ position: "relative", left: 300, top: 20 }}
                variant="caption"
                display="block"
                gutterBottom
              >
                $9.99
              </Typography>
            </Box>
            <Box component="div" sx={{ display: "flex", marginTop: 3 }}>
              <Box
                component="div"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="h6">Product 2</Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Another thing
                </Typography>
              </Box>
              <Typography
                sx={{ position: "relative", left: 300, top: 20 }}
                variant="caption"
                display="block"
                gutterBottom
              >
                $3.45
              </Typography>
            </Box>
            <Box component="div" sx={{ display: "flex", marginTop: 3 }}>
              <Box
                component="div"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="h6">Product 3</Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Something else
                </Typography>
              </Box>
              <Typography
                sx={{ position: "relative", left: 300, top: 20 }}
                variant="caption"
                display="block"
                gutterBottom
              >
                $6.51
              </Typography>
            </Box>
            <Box component="div" sx={{ display: "flex", marginTop: 3 }}>
              <Box
                component="div"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="h6">Product 4</Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Best thing of all
                </Typography>
              </Box>
              <Typography
                sx={{ position: "relative", left: 300, top: 20 }}
                variant="caption"
                display="block"
                gutterBottom
              >
                $14.11
              </Typography>
            </Box>
            <Box component="div" sx={{ display: "flex", marginTop: 3 }}>
              <Typography>Shipping</Typography>
              <Typography sx={{ position: "relative", left: 330 }}>
                Free
              </Typography>
            </Box>

            <Box component="div" sx={{ display: "flex", marginTop: 3 }}>
              <Typography>Total</Typography>
              <Typography variant="h6" sx={{ position: "relative", left: 350 }}>
                $34.06
              </Typography>
            </Box>
            <Box component="div" sx={{ display: "flex", marginTop: 3 }}>
              <Box component="div" sx={{ width: 250 }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  Shipping
                </Typography>
                <Typography variant="body1">John Smith</Typography>
                <Typography variant="body1">
                  1 MUI Drive, Reactville, Anytown, 99999, USA
                </Typography>
              </Box>
              <Box component="div" sx={{ marginLeft: 5 }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  Payment details
                </Typography>
                <Box component="div" display="flex" sx={{ gap: 4 }}>
                  <Typography variant="body1">Card Type </Typography>
                  <Typography variant="body1" sx={{ marginLeft: 1 }}>
                    Visa
                  </Typography>
                </Box>
                <Box component="div" display="flex" sx={{ gap: 4 }}>
                  <Typography variant="body1">Card holder </Typography>
                  <Typography variant="body1">John Smith</Typography>
                </Box>
                <Box component="div" display="flex" sx={{ gap: 4 }}>
                  <Typography variant="body1">Card number </Typography>
                  <Typography variant="body1">xxxx - xxxx - 1234</Typography>
                </Box>
                <Box component="div" display="flex" sx={{ gap: 4 }}>
                  <Typography variant="body1">Expiry date</Typography>
                  <Typography variant="body1">04/2024</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
        {activeStep === steps.length && (
          <Box sx={{ height: 400, width: 400, margin: "auto", marginTop: 3 }}>
            <Typography variant="h5" color="primary">
              Thank you for your order.
            </Typography>
            <Typography sx={{ fontWeight: 600 }}>
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
            <Divider sx={{ marginTop: 4 }} />
          </Box>
        )}
        <Box
          sx={{ display: "flex", flexDirection: "row", pt: 2, marginTop: 30 }}
        >
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>

          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              mr: 3,
              border: "0px solid ",
              backgroundColor: "#42a5f5",
              borderRadius: 3,
              width: "auto",
              fontSize: 12,
              fontWeight: 900,
            }}
          >
            {activeStep === steps.length - 1 ? "PlaceOrder" : "Next"}
          </Button>
        </Box>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: 4,
          marginBottom: 4,
          color: "grey",
        }}
      >
        Copyright © <strong>Your Website</strong> 2023.
      </Typography>
    </Box>
  );
};

export default DesignPractice;
