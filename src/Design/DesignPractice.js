import React, { useState } from "react";
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
import { check_Update } from "../CheckoutReducers";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const steps = ["Shipping address", "Payment details", "Review your order"];
const DesignPractice = () => {
  const [activeStep, setActiveStep] = useState(0);
  const selector = useSelector((state) => state.checkout);
  const [storedata, setStoreData] = useState([]);
  
  const [validationErrors, setValidationErrors] = useState({});
const dispatch=useDispatch()
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  console.log(activeStep, steps.length);
  const cardValid=/^[0-9]/;
  // const ExpiryValid=/^([0-9])$/;
  const validateForm = () => {
  let errors = {};
  let isValid = true;

  if (activeStep === 0) {
    if (!storedata.FirstName ) {
      errors.FirstName = 'Required Field';
      isValid = false;
    }
    if (!storedata.LastName ) {
      errors.LastName = 'Required Field';
      isValid = false;
    }
    if (!storedata.Address1 ) {
      errors.Address1 = 'Required Field';
      isValid = false;
    }
    if (!storedata.City ) {
      errors.City = 'Required Field';
      isValid = false;
    }
    if (!storedata.PinCode ) {
      errors.PinCode = 'Required Field';
      isValid = false;
    }
    if (!storedata.Country ) {
      errors.Country = 'Required Field';
      isValid = false;
    }



  }
  if (activeStep === 1) {
    if (!storedata.Name ) {
      errors.Name = 'Required Field';
      isValid = false;
    }
    if(!storedata.Cnumber|| !cardValid.test(storedata.Cnumber)){
      errors.Cnumber = 'Only Numbers or Must meet the criteriaa';
      isValid = false;
    }
    // if(!storedata.ExpNum){
    //   errors.ExpNum = 'Only Numbers or Must meet the criteriaa';
    //   isValid = false;
    // }
    
    
  }

  setValidationErrors(errors);
  return isValid;

};
  const handleNext = () => {
    if (validateForm()){
    if (activeStep <= steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }
    
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  function handleChange(field, value) {
    
    setStoreData({
      ...storedata,
      [field]: value,
     

    });
       setValidationErrors({ ...validationErrors, [field]: '' });
  }
useEffect(()=>{
dispatch(check_Update(storedata))
},[storedata])
console.log(selector)
console.log(storedata)
  return (
    <Box sx={{ width: 1180, border: "1px solid black" }}>
      <AppBar />
      <Toolbar sx={{ backgroundColor: "#e4e5eb" }}>
        <Typography variant="h5" fontFamily="Bahnschrift">
          {/* {" "} */}
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
                name="fname"
                value={storedata.FirstName}
                error={Boolean(validationErrors.FirstName)}
                helperText={validationErrors.FirstName}
                onChange={(e) => handleChange("FirstName", e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Last Name*"
                variant="standard"
                value={storedata.LastName}
                error={Boolean(validationErrors.LastName)}
                helperText={validationErrors.LastName}
                name="lname"
                onChange={(e) => handleChange("LastName", e.target.value)}
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
                name="addr1"
                value={storedata.Address1}
                error={Boolean(validationErrors.Address1)}
                helperText={validationErrors.Address1}
                variant="standard"
                onChange={(e) => handleChange("Address1", e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Address line2"
                name="addr2"
                value={storedata.Address2}
                variant="standard"
                onChange={(e) => handleChange("Address2", e.target.value)}
              />
            </Box>
            <Box
              component="div"
              sx={{ display: "flex", gap: 12, marginTop: 3 }}
            >
              <TextField
                id="standard-basic"
                label="City*"
                variant="standard"
                value={storedata.City}
                error={Boolean(validationErrors.City)}
                helperText={validationErrors.City}
                name="city"
                onChange={(e) => handleChange("City", e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="State/Province/Region"
                value={storedata.State}
                variant="standard"
                name="state"
                onChange={(e) => handleChange("State", e.target.value)}
              />
            </Box>
            <Box
              component="div"
              sx={{ display: "flex", gap: 12, marginTop: 3 }}
            >
              <TextField
                id="standard-basic"
                label="Zip/Postal code*"
                name="code"
                value={storedata.PinCode}
                error={Boolean(validationErrors.PinCode)}
                helperText={validationErrors.PinCode}
                variant="standard"
                onChange={(e) => handleChange("PinCode", e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Country*"
                name="country"
                value={storedata.Country}
                error={Boolean(validationErrors.Country)}
                helperText={validationErrors.Country}
                variant="standard"
                onChange={(e) => handleChange("Country", e.target.value)}
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
                name="Name"
                value={storedata.Name}
                error={Boolean(validationErrors.Name)}
                helperText={validationErrors.Name}
                onChange={(e)=>handleChange("Name", e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Card number*"
                variant="standard"
                name="Cnumber"
                value={storedata.Cnumber}
                error={Boolean(validationErrors.Cnumber)}
                helperText={validationErrors.Cnumber}
                onChange={(e)=>handleChange("Cnumber", e.target.value)}
              />
            </Box>

            <Box component="div" sx={{ display: "flex", gap: 2, marginTop: 3 }}>
              <TextField
                id="standard-basic"
                label="Expiry date*"
                variant="standard"
              name="ExpNum"
              value={storedata.ExpNum}
              // error={Boolean(validationErrors.ExpNum)}
              // helperText={validationErrors.ExpNum}
              onChange={(e)=>handleChange("ExpNum",e.target.value)}
              />
              <TextField id="standard-basic" value={storedata.Cvv} label="CVV" variant="standard"  name="cvv" onChange={(e)=>handleChange("Cvv",e.target.value)}/>
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
                <Typography variant="body1">{storedata.FirstName}{storedata.LastName}</Typography>
                <Typography variant="body1">
                 {storedata.Address1}{storedata.City}{storedata.PinCode}{storedata.Country}
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
                  <Typography variant="body1">{storedata.Name}</Typography>
                </Box>
                <Box component="div" display="flex" sx={{ gap: 4 }}>
                  <Typography variant="body1">Card number </Typography>
                  <Typography variant="body1">{storedata.Cnumber} - 1234</Typography>
                </Box>
                <Box component="div" display="flex" sx={{ gap: 4 }}>
                  <Typography variant="body1">Expiry date</Typography>
                  <Typography variant="body1">{storedata.ExpNum}</Typography>
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
