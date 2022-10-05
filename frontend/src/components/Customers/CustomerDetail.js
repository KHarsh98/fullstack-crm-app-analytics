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
  CircularProgress,
} from "@mui/material";
import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants/constants";
import "./CustomerDetail.scss";
import ORDER_STATUS from "constants/ORDER_STATUS";
import DeleteCustomer from "components/Dialogs/DeleteCustomer";
import CustomerForm from "components/Dialogs/CustomerForm";
import OrderDatagrid from "components/Orders/OrderDatagrid";
function CustomerDetail() {
  const { id } = useParams();
  const [customer, setcustomer] = useState();
  const [orders, setOrders] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const totalOrders = useMemo(() => orders.length, [customer, id, orders]);
  const pendingOrders = useMemo(
    () =>
      orders.filter((order) => order.status === ORDER_STATUS.PENDING).length,
    [customer, id, orders]
  );
  const completedOrders = useMemo(
    () =>

      orders.filter((order) => order.status === ORDER_STATUS.DELIVERED).length,
    [customer, id, orders]
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
    async function fetchCustomerOrders(customerId) {
      const request = API_URL + `/customers/${customerId}/orders`;
      const response = await fetch(request);
      if (response.ok) {
        let orderList = await response.json();
        setOrders(orderList);
      }
    }
    fetchCustomerDetails(id);
    fetchCustomerOrders(id);
  }, []);

  return (
    <>
      {customer && orders && (
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
          <OrderDatagrid orders={orders} />

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
      {!orders && !customer && (<Stack height='100vh' justifyContent="center" alignItems='center'>
        <CircularProgress size={100} />
      </Stack>)}
    </>
  );
}

export default CustomerDetail;
