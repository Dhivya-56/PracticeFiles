import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
const student = [
  {
    name: "Dhivya",
    m1: 98,
    m2: 90,
    m3: 50,
  },
  {
    name: "Priya",
    m1: 56,
    m2: 70,
    m3: 50,
  },
  {
    name: "Deeksha",
    m1: 23,
    m2: 40,
    m3: 80,
  },
];
const TablePractice1 = () => {
  const [data, setData] = useState({
    name: "",
    m1: "",
    m2: "",
    m3: "",
  });

  function handleChange(e) {
    const values = e.target.value;
    setData({
      ...data,
      [e.target.name]: values,
    });
  }
  function handleClick() {
    const update = [...student, data];
    student.push(data);
    setData({
      name: "",
      m1: "",
      m2: "",
      m3: "",
    });
    console.log(update);
    console.log(student);
    console.log(data);
  }

  console.log(data);
  return (
    <Box
      display="flex"
      sx={{
        border: "1px solid black",
        borderRadius: 5,
        boxShadow: 3,
        marginTop: 5,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          width: 500,
          margin: "auto",
          border: "1px solid black",
          backgroundColor: "#e5c7f3",
          marginBottom: 3,
          marginTop: 3,
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: 25 }}>
          Student Details
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          name="name"
          variant="outlined"
          sx={{ margin: 2, backgroundColor: "#e9eaf3" }}
          value={data.name}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Mark1"
          name="m1"
          variant="outlined"
          sx={{ margin: 2, backgroundColor: "#e9eaf3" }}
          value={data.m1}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Mark2"
          name="m2"
          variant="outlined"
          sx={{ margin: 2, backgroundColor: "#e9eaf3" }}
          value={data.m2}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Mark3"
          name="m3"
          variant="outlined"
          sx={{ margin: 2, backgroundColor: "#e9eaf3" }}
          value={data.m3}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ margin: "auto", marginBottom: 3 }}
        >
          ENTER
        </Button>
      </Box>

      <Box
        sx={{
          border: "1px solid black",
          width: 650,
          margin: "auto",
          marginTop: 3,
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: 25 }}>
          DATA IN THE TABLE
        </Typography>
        <TableContainer component={Paper} sx={{ minWidth: 650 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ backgroundColor: "#867de3" }}
                hover={true}
                selected={true}
              >
                <TableCell sx={{ fontSize: 15, fontWeight: 700 }}>
                  Name
                </TableCell>
                <TableCell sx={{ fontSize: 15, fontWeight: 700 }}>M1</TableCell>
                <TableCell sx={{ fontSize: 15, fontWeight: 700 }}>M2</TableCell>
                <TableCell sx={{ fontSize: 15, fontWeight: 700 }}>M3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {student.map(({ name, m1, m2, m3 }, i) => (
                <TableRow
                  sx={
                    i % 2
                      ? { backgroundColor: "#b4edeb" }
                      : { backgroundColor: "#f8bbcf" }
                  }
                >
                  <TableCell>{name}</TableCell>
                  <TableCell>{m1}</TableCell>
                  <TableCell>{m2}</TableCell>
                  <TableCell>{m3}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TablePractice1;
