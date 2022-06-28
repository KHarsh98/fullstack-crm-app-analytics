import React, { useEffect, useState } from "react";
import { CircularProgress, Stack } from "@mui/material";
import InfoTiles from "./InfoTiles";
import RecentCustomers from "./RecentCustomers";
import RecentOrders from "./RecentOrders";
import { API_URL } from "../../constants/constants";

function Dashboard() {
  const [customers, setcustomers] = useState();
  const [orders, setorders] = useState();

  useEffect(() => {
    async function fetchCustomers() {
      const request = API_URL + "/customers";
      const response = await fetch(request);
      const customerList = await response.json();
      customerList.forEach((cust) => {
        const d = new Date(cust.date_created);
        cust.date_created = `${d.getUTCDate()}-${d.getUTCMonth()}-${d.getUTCFullYear()} ${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`;
      });
      setcustomers(customerList);
    }
    async function fetchOrders() {
      const request = API_URL + "/orders/?ordering=-date_created";
      const response = await fetch(request);
      const orders = await response.json();
      orders.forEach((order) => {
        const d = new Date(order.date_created);
        order.date_created = `${d.getUTCDate()}-${d.getUTCMonth()}-${d.getUTCFullYear()} ${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`;
      });
      setorders(orders);
    }
    fetchCustomers();
    fetchOrders();
  }, []);
  return (
    <Stack m={3} spacing={6} alignItems="stretch">
      {orders && customers && (
        <>
          <InfoTiles orders={orders} />
          <Stack direction="row" spacing={5}>
            <RecentCustomers customers={customers} />
            <RecentOrders orders={orders} />
          </Stack>
        </>
      )}
      {(!orders || !customers) && (
        <>
          <CircularProgress />
        </>
      )}
    </Stack>
  );
}

export default Dashboard;
