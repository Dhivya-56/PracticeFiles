import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },

  {
    field: "M1",
    headerName: "M1",
    type: "number",
    width: 90,
  },
  {
    field: "M2",
    headerName: "M2",
    type: "number",
    width: 90,
  },
  {
    field: "M3",
    headerName: "M3",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, Name: "Prema", M1: 34, M2: 45, M3: 78 },
  { id: 2, Name: "Thangavel", M1: 54, M2: 75, M3: 78 },
  { id: 3, Name: "Priyanka", M1: 84, M2: 95, M3: 98 },
  { id: 4, Name: "Yamuna", M1: 94, M2: 85, M3: 98 },
  { id: 5, Name: "MohanRaj", M1: 23, M2: 65, M3: 98 },
  { id: 6, Name: "Dhivya", M1: 67, M2: 55, M3: 28 },
  { id: 7, Name: "Pruthika", M1: 94, M2: 25, M3: 38 },
  { id: 8, Name: "Ganesan", M1: 14, M2: 35, M3: 88 },
  { id: 9, Name: "Tamilarasi", M1: 84, M2: 100, M3: 98 },
];

export default function TablePractice2() {
  return (
    <Box sx={{ height: 400, width: "70%", margin: "auto", marginTop: 4 }}>
      <Typography sx={{ textAlign: "center", fontSize: 16, fontWeight: 700 }}>
        DATA GRID TABLE
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  );
}
