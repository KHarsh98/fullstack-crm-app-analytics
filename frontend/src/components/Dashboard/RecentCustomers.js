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
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Dashboard.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomerForm from "components/Dialogs/CustomerForm";

function RecentCustomers({ customers }) {
  const [createCustomerDialog, setcreateCustomerDialog] = useState(false);
  const handleOpenCustomerForm = () => {
    setcreateCustomerDialog(true);
  };
  return (
    <Stack flex={1} spacing={4}>
      <Typography variant="h5">Customers</Typography>
      <Button variant="contained" onClick={handleOpenCustomerForm}>
        Create Customer
      </Button>
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
      {createCustomerDialog && (
        <CustomerForm
          open={createCustomerDialog}
          setcreateCustomerDialog={setcreateCustomerDialog}
        />
      )}
    </Stack>
  );
}

export default RecentCustomers;
