import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants/constants";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";

import "./CustomerDetail.scss";
import { Delete, Edit } from "@mui/icons-material";
import orderStatuses from "constants/ORDER_STATUS";
import DeleteCustomer from "components/Dialogs/DeleteCustomer";
import CustomerForm from "components/Dialogs/CustomerForm";
function CustomerDetail() {
  const { id } = useParams();
  const [customer, setcustomer] = useState();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const totalOrders = useMemo(() => customer?.orders.length, [customer, id]);
  const pendingOrders = useMemo(
    () => customer?.orders.filter((order) => order.status === "pending").length,
    [customer, id]
  );
  const completedOrders = useMemo(
    () =>
      customer?.orders.filter((order) => order.status === "delivered").length,
    [customer, id]
  );

  const openDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };
  const openUpdateDialog = () => {
    setUpdateDialogOpen(true);
  };

  useEffect(() => {
    async function fetchCustomerDetails(customerId) {
      const request = API_URL + `/customers/${customerId}`;
      const response = await fetch(request);
      const customerDetails = await response.json();
      setcustomer(customerDetails);
    }
    fetchCustomerDetails(id);
  }, []);

  return (
    <>
      {customer && (
        <Stack m={3} spacing={6} alignItems="stretch">
          <Stack direction="row" justifyContent="space-between">
            <Stack component={Paper} sx={{ minWidth: 600 }} spacing={3} p={3}>
              <Typography variant="h4" align="center">
                Customer: {customer.name}
              </Typography>
              <Divider />
              <Button
                className="customer-card-btn"
                color="warning"
                variant="outlined"
                size="large"
                onClick={openUpdateDialog}
              >
                Update
              </Button>
              <Button
                onClick={openDeleteDialog}
                color="error"
                variant="outlined"
                size="large"
              >
                Delete
              </Button>
            </Stack>
            <Card className="customer-detail-card">
              <CardHeader
                title="Contact Information"
                align="center"
                titleTypographyProps={{
                  variant: "h4",
                }}
              />
              <Divider />
              <CardContent>
                <Table
                  sx={{
                    [`& .${tableCellClasses.root}`]: {
                      borderBottom: "none",
                    },
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography variant="h5">Email</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5">Phone</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography color="info.main">
                          {customer.email}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="info.main">
                          {customer.phone}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="customer-detail-card">
              <CardHeader
                title="Orders"
                align="center"
                titleTypographyProps={{
                  variant: "h4",
                }}
              />
              <Divider />
              <CardContent>
                <Table
                  sx={{
                    [`& .${tableCellClasses.root}`]: {
                      borderBottom: "none",
                    },
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">
                        <Typography variant="h5">Total Orders</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="h5">Pending Orders</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="h5">Completed Orders</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        <Typography variant="h4" color="info.main">
                          {totalOrders}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="h4" color="info.main">
                          {pendingOrders}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="h4" color="info.main">
                          {completedOrders}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Stack>
          <Box sx={{ height: 400, width: "50%" }} component={Paper}>
            <Stack flexDirection="row" style={{ height: "100%" }}>
              <Box component="div" style={{ flexGrow: 1 }}>
                <DataGrid
                  columns={[
                    {
                      field: "order_number",
                      minWidth: 200,
                      headerName: "Order Number",
                    },
                    {
                      field: "date_created",
                      minWidth: 300,
                      headerName: "Date of Order",
                    },
                    {
                      field: "status",
                      minWidth: 200,
                      headerName: "Status",
                      valueOptions: orderStatuses,
                    },
                    {
                      field: "actions",
                      type: "actions",
                      headerName: "Actions",
                      minWidth: 150,
                      getActions: (params) => [
                        <GridActionsCellItem
                          icon={<Delete />}
                          label="Delete"
                          // onClick={deleteUser(params.id)}
                        />,
                        <GridActionsCellItem
                          icon={<Edit />}
                          label="Edit"
                          // onClick={toggleAdmin(params.id)}
                          showInMenu
                        />,
                      ],
                    },
                  ]}
                  rows={[...customer.orders]}
                  components={{
                    Toolbar: GridToolbar,
                  }}
                  componentsProps={{
                    toolbar: { showQuickFilter: true },
                  }}
                  rowsPerPageOptions={[100, 25, 50, 10]}
                />
              </Box>
            </Stack>
          </Box>
          <DeleteCustomer
            open={deleteDialogOpen}
            setDeleteDialogOpen={setDeleteDialogOpen}
            customer={customer}
          />
          {updateDialogOpen && (
            <CustomerForm
              customer={customer}
              open={updateDialogOpen}
              setUpdateDialogOpen={setUpdateDialogOpen}
            />
          )}
        </Stack>
      )}
    </>
  );
}

export default CustomerDetail;
