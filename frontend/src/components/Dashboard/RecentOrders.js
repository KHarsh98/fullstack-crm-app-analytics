import {
  Table,
  TableCell,
  TableHead,
  TableContainer,
  Paper,
  TableBody,
  TableRow,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Dashboard.scss";
import React from "react";
import { Delete, Edit } from "@mui/icons-material";

function RecentOrders({ orders }) {
  return (
    <Stack flex={2} spacing={4}>
      <Typography variant="h5">Last 5 Orders</Typography>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 4,
        }}
      >
        <Table aria-label="recent orders table">
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Date Of Order</TableCell>
              <TableCell>View</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders &&
              orders.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.order_number}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell align="right">{row.date_created}</TableCell>

                  <TableCell>
                    <IconButton color="primary">
                      <SearchIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton color="error">
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default RecentOrders;
