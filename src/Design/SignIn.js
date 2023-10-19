import React from "react";
import { Avatar, Box, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Paper, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Typography } from "antd";
import { Checkbox } from "antd";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const { Title } = Typography;
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  function handleClick() {
    navigate("/");
  }
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Paper sx={{ height: 590, margin: "auto" }}>
            <Box
              component="img"
              src="signin(2).jpg"
              sx={{ width: 595, height: 580 }}
            ></Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ height: 590, margin: "auto" }}>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar sx={{ backgroundColor: "#722ed1", marginTop: 10 }}>
                  {" "}
                  <LockIcon />
                </Avatar>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 5,
                  marginTop: 0,
                  width: 500,
                }}
              >
                <Title level={4} style={{ marginTop: 10, marginLeft: 230 }}>
                  SignIn
                </Title>
                <TextField
                  id="outlined-basic"
                  label="Email Address*"
                  sx={{ margin: 3 }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Password*"
                  sx={{ margin: 3 }}
                  variant="outlined"
                />
                <Checkbox
                  onChange={onChange}
                  style={{ margin: 3, marginBottom: 10, marginLeft: 40 }}
                >
                  Remember Me
                </Checkbox>
                <Button
                  type="primary"
                  style={{ marginBottom: 10, width: 300, marginLeft: 110 }}
                >
                  SIGN IN
                </Button>

                <Box sx={{ display: "flex", gap: 7, marginLeft: 10 }}>
                  <Link href="#">Forgot password?</Link>
                  <Link href="#">Don't have an account? Sign Up</Link>
                </Box>
                <Typography style={{ marginLeft: 150, marginTop: 10 }}>
                  Copyright © <Link>Your Website </Link> 2023.
                </Typography>
                <Button
                  type="primary"
                  style={{ width: 100 }}
                  onClick={handleClick}
                >
                  BACK
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
