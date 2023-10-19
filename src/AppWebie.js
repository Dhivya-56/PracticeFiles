import React from "react";
import { Box, Stack } from "@mui/material";
import WebiePage from "./Webie/WebiePage";
import Sidebar from "./Webie/Sidebar";
import Feed from "./Webie/Feed";
import RightBar from "./Webie/RightBar";
import Navbar from "./Webie/Navbar";

const AppWebie = () => {
  return (
    <Box>
      <Navbar />

      <Stack spacing={2} direction="row" justifyContent="space-between">
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default AppWebie;
