import {
  Table,
  TableCell,
  TableHead,
  TableContainer,
  Paper,
  TableBody,
  TableRow,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Dashboard.scss";
import React from "react";
import { Link } from "react-router-dom";

function RecentCustomers({ customers }) {
  return (
    <Stack flex={1} spacing={4}>
      <Typography variant="h5">Customers</Typography>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 4,
        }}
      >
        <Table aria-label="recent customers table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Orders</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers &&
              customers.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row.order_count}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      component={Link}
                      to={`/customer/${row.id}`}
                    >
                      <SearchIcon />
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

export default RecentCustomers;
